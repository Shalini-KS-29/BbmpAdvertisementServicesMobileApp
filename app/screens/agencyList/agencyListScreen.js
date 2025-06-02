import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';
import styles from './agencyListStyle';
import { useNavigation } from '@react-navigation/native';
import { requestLocationPermission } from '../geoLocation/geolocationScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons'; // You can change the icon set
import Ionicon from 'react-native-vector-icons/Ionicons';
import colors from '../../constant/colors';


const List = [
    {
        id: 1, name: 'Outdoor Advertising Solutions', Address: 'Main Street Junction',
        Gst: '29AABB',
        Infrastructure: "Digital Billboard on Commercial Building",
        Latitude: "12.97656", Longitude: "77.67877",
        Permission_no: "ADV/2023/0042", Permission_date: "2023-06-15",
        Mode_of_Sights: "Digital Display", Package_numbers: "PKG-2023-015,PKG-2023-016",
        Valid_From: "2023-07-01", Valid_to: "2024-06-30",
        Measurements: "10m * 6m", No_Approved_Display_Areas: '3',
        Fee_to_be_paid: "45,000", legal_status: 'None'

    },
    {
        id: 2, name: 'City Media Group', Address: 'Central Business District',
        Gst: '30CCDD',
        Infrastructure: "Digital Billboard on Commercial Building",
        Latitude: "12.97656", Longitude: "77.67877",
        Permission_no: "ADV/2023/0042", Permission_date: "2023-06-15",
        Mode_of_Sights: "Digital Display", Package_numbers: "PKG-2023-015,PKG-2023-016",
        Valid_From: "2023-07-01", Valid_to: "2024-06-30",
        Measurements: "10m * 6m", No_Approved_Display_Areas: '3',
        Fee_to_be_paid: "45,000", legal_status: 'None'
    },
    {
        id: 3, name: 'Metro Displays Ltd', Address: 'Highway Plaza',
        Gst: '40EEFF',
        Infrastructure: "Digital Billboard on Commercial Building",
        Latitude: "12.97656", Longitude: "77.67877",
        Permission_no: "ADV/2023/0042", Permission_date: "2023-06-15",
        Mode_of_Sights: "Digital Display", Package_numbers: "PKG-2023-015,PKG-2023-016",
        Valid_From: "2023-07-01", Valid_to: "2024-06-30",
        Measurements: "10m * 6m", No_Approved_Display_Areas: '3',
        Fee_to_be_paid: "45,000", legal_status: 'None'
    },
];

const filterList = [{ id: 1, type: "Skywalk" },
{ id: 2, type: "Public Toilets" },
{ id: 3, type: "BUS STOP" },
]

const AgencyListScreen = (props) => {
    const { agencyListData } = props;
    const [selectedId, setSelectedId] = useState(null);
    const navigation = useNavigation();
    const [showFilter, setShowFilter] = useState(false);
    const [showFilterItem, setShowFilterItem] = useState("Skywalk");
    const [filterSelectedId, setFilterSelectedId] = useState(null)

    const handlefilter = () => {
        setShowFilter(!showFilter)
    }

    useEffect(() => {
        requestLocationPermission()
    }, [])

    const handleSelectedItem = (item) => {
        setSelectedId(item.id)
        navigation.navigate('Home', { 'id': item.id })
    }

    const renderItem = ({ item }) => {
        console.log("itemmmmm", item)
        const isSelected = item.id === selectedId;
        return (
            <ScrollView style={styles.cardContainer}>
                {showFilterItem == item.type && <Card
                    style={[styles.cardStyle, isSelected && styles.selectedCardStyle]}
                    onPress={() => handleSelectedItem(item)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ margin: 10, width: '80%' }}>
                            <Text style={styles.headText}>{item.agencyName}</Text>
                            <Text style={styles.addressText}>{item.address}</Text>
                        </View>
                        <Icon name="arrow-right" size={50} color={colors.primary} style={styles.icon} />
                    </View>
                </Card>}
            </ScrollView>
        );
    };

    return (
        <View style={{}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Select Agenicies</Text>
                <TouchableOpacity onPress={() => handlefilter()}>
                    <Ionicon name="filter" size={25} color={colors.primary} style={styles.icon} />
                </TouchableOpacity>
            </View>
            {showFilter &&
                <ScrollView contentContainerStyle={{ flex: 1 }} horizontal={true}  >
                    {filterList.map((item) => {
                        const isSelected = item?.type === showFilterItem;
                        return <Card
                            key={item?.type}
                            style={[styles.filterCardStyle,
                            isSelected && styles.selectedFilterCardStyle]}
                            onPress={() => setShowFilterItem(item?.type)}>
                            <View style={styles.filterCard}>
                                <Text style={[styles.filterHeadText,
                                isSelected && styles.selectedfilterHeadText]}>{item?.type}</Text>
                            </View>
                        </Card>
                    })}
                </ScrollView>}
            <FlatList
                // style={{ flex: 1 }}
                data={agencyListData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                extraData={selectedId}
            />
        </View >
    );
};

export default AgencyListScreen;

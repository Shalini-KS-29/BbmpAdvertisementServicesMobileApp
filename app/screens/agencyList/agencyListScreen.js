import React, { useState } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';
import styles from './agencyListStyle';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import colors from '../../constant/colors';


const agencyType = [
    {
        "id": 1,
        "type": "Skywalk"
    },
    {
        "id": 2,
        "type": "Public Toilets"
    },
    {
        "id": 3,
        "type": "Bus Stop"
    },
    {
        "id": 4,
        "type": "UnderPass"
    },
]

const AgencyListScreen = (props) => {
    const { agencyListData } = props;
    const navigation = useNavigation();
    const [selectedId, setSelectedId] = useState(null);
    const [showFilter, setShowFilter] = useState(false);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedTypeId, setSelectedTypeId] = useState(null);


    const filteredData = selectedType !== null && showFilter
        ? agencyListData?.filter((item) => item.type === selectedType)
        : agencyListData;

    const handleSelectedItem = (item) => {
        setSelectedId(item.id)
        navigation.navigate('Home', { 'id': item.id })
    }

    const handleSelectedTypeItem = (item) => {
        setSelectedType(item.type)
        setSelectedTypeId(item.id)
    }

    const handlefilter = () => {
        setShowFilter(!showFilter)
    }

    const EmptyListMessage = () => {
        return (
            <Text style={styles.noDataText}  >
                No Data Found
            </Text>
        );
    };

    const renderItem = ({ item }) => {
        const isSelected = item.id === selectedId;
        return <Card
            style={[styles.cardStyle, isSelected && styles.selectedCardStyle]}
            onPress={() => handleSelectedItem(item)}>
            <View style={styles.listContainer}>
                <View style={styles.textList}>
                    {/* <Text style={styles.headText}>{item.id}</Text> */}
                    <Text style={styles.headText}>{item.agencyName}</Text>
                    <Text style={styles.addressText}>{item.address}</Text>
                </View>
                <Icon name="arrow-right" size={50} color={colors.primary} style={styles.icon} />
            </View>
        </Card>
    }

    return (
        <View style={styles.container}>
            <View style={styles.agencyContainer}>
                <Text style={styles.selectAgencies}>Select Agencies</Text>
                <TouchableOpacity onPress={handlefilter}>
                    <Ionicon name="filter" size={25} color={colors.primary} style={styles.icon} />
                </TouchableOpacity>
            </View>
            {showFilter &&
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {agencyType.map((item) => {
                        const isSelectedTypeId = item?.id === selectedTypeId;
                        return <TouchableOpacity
                            key={item.type}
                            onPress={() => handleSelectedTypeItem(item)}
                        > <Card
                            style={[styles.filterCardStyle, isSelectedTypeId && styles.selectedFilterCardStyle]}>
                                <Text style={[styles.filterHeadText, isSelectedTypeId && styles.selectedfilterHeadText]}>
                                    {item.type}</Text>
                            </Card>
                        </TouchableOpacity>
                    })}
                </ScrollView>}

            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                initialNumToRender={5}
                ListEmptyComponent={EmptyListMessage}
            />
        </View>
    );
};

export default AgencyListScreen;

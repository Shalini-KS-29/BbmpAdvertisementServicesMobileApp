import React, { useCallback, useState } from 'react';
import { FlatList, Image, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './inspectionHistoryStyle';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constant/colors';


const InspectionHistory = (props) => {
    const { historyResponse } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(false);
    const openFullScreen = (index) => {
        console.log("indexxxx", index)
        setCurrentIndex(index);
        setVisible(true);
    };

    const renderImage = useCallback(({ item, index }) => (
        <TouchableOpacity onPress={() => openFullScreen(index)}>
            <Image source={{ uri: item }} style={styles.image} resizeMode="contain" />
        </TouchableOpacity>
    ), []);

    const handleMapClick = (latitude, longitude) => {
        const label = 'Selected Location';
        const url = Platform.select({
            ios: `http://maps.apple.com/?ll=${latitude},${longitude}&q=${label}`,
            android: `geo:${latitude},${longitude}?q=${latitude},${longitude}(${label})`,
        });

        Linking.openURL(url).catch(err => console.error("Failed to open map", err));
    };


    const renderItem = ({ item }) => {

        const images = item.inspectionDocs
            ?.map((uri) => ({ uri: uri.replace(/\/\d+$/, '') })) || [];
        return (
            <Card
                style={styles.card}>
                <View style={{}}>

                    {/* <Card style={styles.idContainerStyle}> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                        <View style={styles.idTextContainer}>
                            {/* <Icon name="map-marker" size={18} color={colors.red} /> */}

                            {/* <Text style={styles.idTitleText}>Advertisement Id</Text> */}
                            <Text style={styles.idTitleText}>Id</Text>
                            <Text style={styles.idColon}>:</Text>
                            <Text style={styles.idValueText}>{item.advertisementId}</Text>
                        </View>

                        <View style={styles.idTextContainer}>
                            {/* <Icon name="map-marker" size={18} color={colors.red} /> */}

                            <Text style={styles.idTitleText}>Date</Text>
                            <Text style={styles.idColon}>:</Text>
                            <Text style={styles.idValueText}>{item.inspectedDate ? item.inspectedDate : 'NA'}</Text>
                        </View>
                    </View>

                    {/* </Card> */}
                    {/* <View style={styles.textContainer}>
                   
                </View>



                <View style={styles.textContainer}>
                    
                </View> */}
                    <Card style={styles.cardContainer}>

                        <View style={styles.textContainer}>
                            <Text style={styles.titleText}>Approved Specification</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.valueText}>{item.approvedSpecification ? item.approvedSpecification : 'NA'}</Text>
                        </View>
                        {/* </Card> */}
                        {/* <Card style={{
                        padding: 5, marginVertical: 10, backgroundColor: 'white', borderRadius: 4,
                        borderColor: colors.primary */}
                        {/* }}> */}
                        <View style={styles.textContainer}>
                            <Text style={styles.titleText}>Structural Condition</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.valueText}>{item.structuralCondition ? item.structuralCondition : 'NA'}</Text>
                        </View>
                        {/* </Card> */}
                        {/* <Card style={styles.cardContainer}> */}

                        <View style={styles.textContainer}>
                            <Text style={styles.titleText}>Regulation</Text>
                            <Text style={styles.colon}>:</Text>
                            <Text style={styles.valueText}>{item.regulation ? item.regulation : 'NA'}</Text>
                        </View>
                        {/* </Card> */}

                        {/* <Card style={styles.commentCardContainer}> */}

                        <View style={styles.textContainer}>
                            <Text style={styles.commentTitleText}>Comments</Text>
                            <Text style={styles.commentColon}>:</Text>
                            <Text style={styles.commentValueText}>{item.comments ? item.comments : 'NA'}</Text>
                        </View>
                    </Card>
                    {/* </Card> */}


                    {/* <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Inspection Doc</Text>
                    <Text style={styles.colon}>:</Text>
                    <Text style={styles.valueText}>{item.inspectionDoc ? item.inspectionDoc : 'NA'}</Text>
                </View> */}
                    <TouchableOpacity onPress={() => handleMapClick(item.latitude, item.longitude)}>
                        <Card style={styles.latlongStyle}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.latlLongTextContainer}>
                                    <Icon name="map-marker" size={18} color={colors.red} />

                                    <Text style={styles.latLongTitleText}>Latitude</Text>
                                    <Text style={styles.latLongColon}>:</Text>
                                    <Text style={styles.latLongValueText}>{item.latitude ? item.latitude : 'NA'}</Text>
                                </View>

                                <View style={styles.latlLongTextContainer}>
                                    <Icon name="map-marker" size={18} color={colors.red} />

                                    <Text style={styles.latLongTitleText}>Longitude</Text>
                                    <Text style={styles.latLongColon}>:</Text>
                                    <Text style={styles.latLongValueText}>{item.longitude ? item.longitude : 'NA'}</Text>
                                </View>
                            </View>

                        </Card>


                    </TouchableOpacity>

                    {/* <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Inspection Completed</Text>
                    <Text style={styles.colon}>:</Text>
                    <Text style={styles.valueText}>{item.inspectionCompleted ? item.inspectionCompleted : 'NA'}</Text>
                </View> */}

                    {/* <ScrollView horizontal={true}>

                    <Image source={{
                        uri: "http://192.168.0.35:8393/v1/api/advertisement/file/inspection-1-930E4881-A96D-4402-B60F-11525EBD118E.jpg/2",
                    }} style={styles.image} />

                </ScrollView> */}
                    <FlatList
                        data={item.inspectionDocs}
                        renderItem={renderImage}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        // initialNumToRender={3}
                        // maxToRenderPerBatch={5}
                        showsHorizontalScrollIndicator={false}
                    // pagingEnabled
                    />
                    {/* {console.log("item.inspectionDocs", item.inspectionDocs?.map((p, index) => console.log("p", p, index)))}

                <ImageViewing
                    images={images}
                    // images={item.inspectionDocs?.map((p) => console.log("p", p))}

                    imageIndex={currentIndex}
                    visible={visible}
                    onRequestClose={() => setVisible(false)}
                /> */}



                </View>
            </Card>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={historyResponse}
                renderItem={renderItem}
                keyExtractor={(item) => item?.id?.toString()}
            />
        </View>
    );
};
export default InspectionHistory;
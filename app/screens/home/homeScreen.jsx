import React, { useEffect, useState } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';
import styles from './homeStyle';
import colors from '../../constant/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import InspectionForm from './inspectionForm';
import CustomButton from '../../components/customButton/customButton';
import { useSelector } from 'react-redux';
import AntIcon from 'react-native-vector-icons/FontAwesome5'
import Octicons from 'react-native-vector-icons/Octicons'
import BannerSlider from '../../components/bannerSlider/bannerSlider';

const HomeScreen = (props) => {
    const { listData, id } = props;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const uploadSuccessResponse = useSelector((state) => state.inspectionDetails?.inspectionDetailsResponse)

    useEffect(() => {
        if (uploadSuccessResponse?.status == true) {
            setIsModalVisible(false);
        }
    }, [uploadSuccessResponse]);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <ScrollView style={{ flex: 1, marginBottom: 50 }}>
            <View style={styles.cardContainer}>

                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <View style={{ margin: 1, width: '70%' }}>
                        <Text style={styles.headText}>{listData?.agencyName}</Text>
                        <Text style={styles.gstText}>GST : {listData?.gstNo}</Text>
                    </View>
                    <View style={{ width: '30%' }}>
                        <CustomButton title="INSPECT" onPress={toggleModal} />
                    </View>
                </View>

                <Card style={styles.cardStyle}>
                    <View style={styles.header}>
                        <View style={styles.iconStyle}>
                            <Icon name="building" size={18} color={colors.primary} />
                        </View>
                        <Text style={styles.headingText}>Location & Infrastructure</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>Location</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value}>{listData?.address}</Text>

                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>Infrastructure</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value}>{listData?.infrastructure}</Text>

                    </View>
                </Card>
            </View>
            <View style={styles.cardContainer}>
                <Card style={styles.cardStyle}>
                    <View style={styles.header}>
                        <View style={styles.iconStyle}>
                            <Icon name="map-marker" size={18} color={colors.primary} />
                        </View>
                        <Text style={styles.headingText}>Goelocation</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>Latitude</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value}>{listData?.latitude}</Text>

                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>Logitude</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value}>{listData?.longitude}</Text>

                    </View>
                </Card>
            </View>

            <View style={styles.cardContainer}>
                <Card style={styles.cardStyle}>
                    <View style={styles.header}>
                        <View style={styles.iconStyle}>
                            <Icon name="file" size={18} color={colors.primary} />
                        </View>
                        <Text style={styles.headingText}>Permission Details</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>Permission No.</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value}>{listData?.permissionNo}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>Permission Date</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value}>{listData?.agreementNoDate}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>Mode of Rights</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value}>{listData?.modeOfRights}</Text>
                    </View>
                </Card>
            </View>

            <View style={styles.cardContainer}>
                <Card style={styles.cardStyle}>
                    <View style={styles.header}>
                        <View style={styles.iconStyle}>
                            <Icon name="cube" size={18} color={colors.primary} />
                        </View>
                        <Text style={styles.headingText}>Tendor Details</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>Tendor Number</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value}>{listData?.packageNumbers}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>Package Number</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value}>{listData?.packageNumbers}</Text>
                    </View>
                </Card>
            </View>

            <View style={styles.cardContainer}>
                <Card style={styles.cardStyle}>
                    <View style={styles.header}>
                        <View style={styles.iconStyle}>
                            <Icon name="calendar" size={18} color={colors.primary} />
                        </View>
                        <Text style={styles.headingText}>Validity Period</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>From</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value} >{listData?.validityFrom}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>To</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value}>{listData?.validityPeriod}</Text>
                    </View>
                </Card>
            </View>

            <View style={styles.cardContainer}>
                <Card style={styles.cardStyle}>
                    <View style={styles.header}>
                        <View style={styles.iconStyle}>
                            <AntIcon name="ruler" size={18} color={colors.primary} />
                        </View>
                        <Text style={styles.headingText}>Approved Measurements</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>Measurements</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value}>{listData?.ratePerSqMtrInRs}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>No. of Approved Display Areas</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value}>{listData?.displaySpaceInSqMtr}</Text>
                    </View>
                </Card>
            </View>

            <View style={styles.cardContainer}>
                <Card style={styles.cardStyle}>
                    <View style={styles.header}>
                        <View style={styles.iconStyle}>
                            <Icon name="dollar" size={18} color={colors.primary} />
                        </View>
                        <Text style={styles.headingText}>Payment Status</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>Ground Rent</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value}>{listData?.groundRentInRs}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>Advance Fee</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value}>{listData?.advanceFee ? listData?.advanceFee : 'NA'}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>Penalty</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value}>{listData?.penalty ? listData?.penalty : 'NA'}</Text>
                    </View>
                </Card>
            </View>

            <View style={styles.cardContainer}>
                <Card style={styles.cardStyle}>
                    <View style={styles.header}>
                        <View style={styles.iconStyle}>
                            <Octicons name="law" size={18} color={colors.primary} />
                        </View>
                        <Text style={styles.headingText}>Legal Status</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}>Court Cases</Text>
                        <Text style={styles.colon}>:</Text>
                        <Text style={styles.value}>{listData?.courtCase}</Text>
                    </View>
                </Card>
            </View>
            <View style={styles.banner}>
                <Text style={styles.headingText}>Advertisement Photo</Text>
                <BannerSlider images={listData?.photourl} />
            </View>
            <View style={styles.modalContainer}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={toggleModal}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={styles.closeIconContainer}
                                onPress={toggleModal}>
                                <Icon name='close' size={20} color={colors.primary} />
                            </TouchableOpacity>
                            <View style={{ maxWidth: '100%', }}>
                                <InspectionForm id={id} completionDate={listData?.completionNoDate} />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView >
    );
};
export default HomeScreen;
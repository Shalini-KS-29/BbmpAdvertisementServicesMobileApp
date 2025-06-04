import React, { use, useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './homeStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constant/colors';
import Dropdown from '../../components/customDropDown/dropdown';
import CustomButton from '../../components/customButton/customButton';
import CaptureOrUploadImage from '../../components/uploadImage/uploadImage';
import { useDispatch, useSelector } from 'react-redux';
import { getInspectionDetails } from '../../redux/slice/InspectionFormSlice';
import Toast from 'react-native-toast-message';
import DatePicker from 'react-native-date-picker';
import CustomTextInputwithDatePicker from '../../components/customTextInputWithCalender/customTextinputWithCalender';
import { getAgencyListDetails } from '../../redux/slice/AgencyListDetailsSlice';

const options = ['Yes', 'No'];


const InspectionForm = (props) => {
    const { id } = props;
    const dispatch = useDispatch()
    const [selectMeasurement, setSelectMeasurement] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [comment, setComment] = useState(null);
    const [measurement, setMeasurement] = useState(null)
    const [image, setImage] = useState(null);
    const [dropdown, setDropdown] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false)

    const uploadSuccessResponse = useSelector((state) => state.inspectionDetails?.inspectionDetailsResponse)

    useEffect(() => {
        if (!isSubmitted) return;
        if (uploadSuccessResponse?.status == true) {
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: uploadSuccessResponse?.statusMsg,
                position: 'top',
                // topOffset: 60,
                visibilityTime: 4000,
                autoHide: true,
            });
            dispatch(getAgencyListDetails(id))
        } else if (uploadSuccessResponse?.status == false) {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: uploadSuccessResponse?.statusMsg,
                position: 'top',
                // topOffset: 60,
                visibilityTime: 4000,
                // autoHide: true,
            });
        }
    }, [uploadSuccessResponse, isSubmitted]);

    const handleSubmit = () => {
        const data = {
            "id": id,
            "approvedSpecification": selectMeasurement,
            "structuralCondition": selectedOption,
            "regulation": dropdown,
            "comments": comment,
            "file": image,
            "completionDate": date
        }
        setIsSubmitted(true);
        dispatch(getInspectionDetails(data))
    }

    const handleImage = (data) => {
        setImage(data)
    }

    const handleDropDown = (data) => {
        setDropdown(data)
    }


    return (
        <View
            style={{ marginTop: 5, }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name='clipboard' size={20} color={colors.primary} />
                <Text style={styles.inspectionHeadText}>Inspection Form</Text>
            </View>
            <CaptureOrUploadImage handleImage={handleImage} />

            <Text style={styles.formText}>Enter measurements match the approved specifications</Text>
            <TextInput style={styles.commentInput}
                value={measurement}
                onChangeText={(val) => setMeasurement(val)}
                placeholder='Enter measurements' />
            <View>
                <Text style={styles.formText} >Completion Date </Text>
                <CustomTextInputwithDatePicker
                    style={{ height: 45 }}
                    value={date.toLocaleDateString()}
                    label="Document Registered Date"
                    onPress={() => {
                        console.log('Date picker opened');
                        setOpen(true);
                    }}
                />

                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => setOpen(false)}
                    mode="date"
                    maximumDate={new Date()}
                />
            </View>

            <Text style={styles.formText} >Structural Condition</Text>
            <Dropdown dropDownValue={handleDropDown} />

            <Text style={styles.formText}>Does the content comply with regulations?</Text>
            <View style={styles.radioContainer}>
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.radioContainer}
                        onPress={() => setSelectedOption(option)}
                    >
                        <View style={styles.outerCircle}>
                            {selectedOption === option && <View style={styles.innerCircle} />}
                        </View>
                        <Text style={styles.label}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.formText}>Additional Comments</Text>
            <TextInput style={styles.commentInput}
                value={comment}
                onChangeText={(val) => setComment(val)}
                placeholder='Enter any additional observations or concerns...' />

            <View style={{ width: 370, alignSelf: 'center', marginVertical: 20 }}>
                <CustomButton title="SUBMIT INSPECTION" onPress={() => handleSubmit()} />
            </View>
        </View>
    );
};
export default InspectionForm;
import React, { use, useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomTextInput from '../../components/customTextInput/customTextInput';
import styles from './homeStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constant/colors';
import Dropdown from '../../components/customDropDown/dropdown';
import CustomButton from '../../components/customButton/customButton';
import RadioGroup from '../../components/customRadioButton/radioButton';
import { RadioButton } from 'react-native-paper';
import CaptureOrUploadImage from '../../components/uploadImage/uploadImage';
import { useDispatch, useSelector } from 'react-redux';
import { getInspectionDetails } from '../../redux/slice/InspectionFormSlice';
import Toast from 'react-native-toast-message';
import DatePicker from 'react-native-date-picker';
import CustomTextInputwithDatePicker from '../../components/customTextInputWithCalender/customTextinputWithCalender';

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
            {/* <View style={{ maxWidth: '100%', backgroundColor: 'green' }}> */}
            <CaptureOrUploadImage handleImage={handleImage} />

            {/* </View> */}
            <Text style={styles.formText}>Enter measurements match the approved specifications</Text>
            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}> */}
            {/* <View style={styles.radioContainer}> */}
            <TextInput style={styles.commentInput}
                value={measurement}
                onChangeText={(val) => setMeasurement(val)}

                placeholder='Enter measurements' />

            {/* {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.radioContainer}
                        onPress={() => setSelectMeasurement(option)}
                    >
                        <View style={styles.outerCircle}>
                            {selectMeasurement === option && <View style={styles.innerCircle} />}
                        </View>
                        <Text style={styles.label}>{option}</Text>
                    </TouchableOpacity>
                ))} */}
            {/* <Text style={styles.selected}>Selected: {selectedOption}</Text> */}
            {/* </View> */}
            {/* </View> */}

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
            {/* <Text style={styles.yesNo}>Yes</Text>
                <Text style={styles.yesNo}>No</Text> */}
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
                {/* <Text style={styles.selected}>Selected: {selectedOption}</Text> */}
            </View>
            <Text style={styles.formText}>Additional Comments</Text>
            <TextInput style={styles.commentInput}
                value={comment}
                onChangeText={(val) => setComment(val)}

                placeholder='Enter any additional observations or concerns...' />

            <View style={{ width: 370, alignSelf: 'center', marginVertical: 20 }}>
                <CustomButton title="SUBMIT INSPECTION" onPress={() => handleSubmit()} />

            </View>

            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
                <CustomTextInput />
            </View> */}
        </View>
    );
};
export default InspectionForm;
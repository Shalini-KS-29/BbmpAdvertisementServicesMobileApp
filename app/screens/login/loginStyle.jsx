import { StyleSheet, Dimensions } from "react-native";
import { FontSize } from "../../constant/fontSize";
import colors from "../../constant/colors";

const Device_Height = Dimensions.get('window').height;
const Device_Width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    textInputforMobileno: {
        width: Device_Width / 1.1,
        // justifyContent: 'flex-end',
        alignSelf: 'center',
        marginVertical: 15,
        marginTop: '20%',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        height: 50,
        color: colors.white,
        padding: 10,
        fontSize: FontSize.H3,
        fontWeight: '800'
    },
    textInputforOtp: {
        width: Device_Width / 1.1,
        // justifyContent: 'flex-end',
        alignSelf: 'center',
        marginVertical: 15,
        // marginTop: 100,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        height: 50,
        color: colors.white,
        padding: 10,
        fontSize: FontSize.H3,
        fontWeight: '800'
    },
    textStyle: {
        flexWrap: 'wrap',
        fontSize: FontSize.H1,
        fontWeight: 'bold',
        padding: 15,
        textAlign: 'center',
        color: colors.white,
        marginTop: '10%'
    },
    button: {
        marginHorizontal: 16,
        marginVertical: 10,
    },
    ProfileImages: {
        height: Device_Height / 8,
        width: Device_Width / 1,
        flexDirection: 'row',
        marginTop: '20%'
    },
    EachImage: {
        height: Device_Height / 18,
        width: Device_Height / 18,
        borderRadius: Device_Height / 36,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ImageStyle: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    ImageAndDesignation: {
        alignItems: 'center',
        marginHorizontal: 12,
        marginTop: 10,
    },
    DesignationText: {
        marginTop: 5,
        fontSize: FontSize.H5,
        textAlign: 'center'
    },
    textError: {
        color: 'red',
        // marginTop: 4,
        fontSize: 12,
        alignSelf: 'center'
    },

})
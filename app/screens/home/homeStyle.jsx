import { StyleSheet, Dimensions } from "react-native";
import { FontSize } from '../../constant/fontSize';
import colors from "../../constant/colors";
import { fontConfig } from "react-native-paper/lib/typescript/styles/fonts";

const Device_Height = Dimensions.get('window').height;
const Device_Width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    rowContainer: {
        flexDirection: 'row',

        margin: 3
    },
    headText: {
        fontSize: FontSize.H2,
        fontWeight: '800',
        color: colors.primary
    },
    gstText: {
        fontSize: FontSize.H3,
        fontWeight: '500'
    },
    cardContainer: {
        marginHorizontal: 10,
        marginVertical: 5
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconStyle: {
        margin: 5
    },
    headingText: {
        fontSize: FontSize.H3,
        fontWeight: 'bold',
        margin: 5,
        color: colors.primary
    },
    title: {
        fontSize: FontSize.H4,
        fontWeight: '600',
        width: '30%',
        // color: colors.primary
    },
    colon: {
        fontSize: FontSize.H4,
        fontWeight: '700',
        width: '10%'
    },
    value: {
        fontSize: FontSize.H4,
        width: '60%'
    },
    cardStyle: {
        padding: 10,
        borderWidth: 0.3,
        borderColor: colors.primary
    },
    banner: {
        margin: 12,
        // borderWidth: 1,
        // borderRadius: 5,

    },
    bannerImage: {
        borderRadius: 10,
        width: '100%', // Adjust as needed
        height: 200, // Adjust as needed
        resizeMode: 'cover', // or 'contain', 'stretch', 'repeat', 'center'
    },
    modalContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    formText: {
        fontSize: FontSize.H3,
        fontWeight: '700',
        color: colors.primary,
        margin: 5
    },
    yesNo: {
        fontSize: FontSize.H3,
        margin: 5
    },
    inspectionHeadText: {
        fontSize: FontSize.H1,
        fontWeight: '800',
        color: colors.primary,
        textAlign: 'center',
        margin: 5
    },

    closeIconContainer: {
        alignSelf: 'flex-end',
        // marginBottom: 10,
    },
    // radioContainer: {
    //     padding: 20,
    // },
    radioContainer: {
        flexDirection: 'row',
        margin: 5,
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
        // paddingLeft: 5
        // marginBottom: 15,
    },
    outerCircle: {
        height: 22,
        width: 22,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    innerCircle: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: colors.primary,
    },
    label: {
        fontSize: 16,
    },
    selected: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
    imageContainer: {
        // height: 200,
        // borderRadius: 12,
        // borderWidth: 2,
        // borderColor: 'rgba(255, 255, 255, 0.3)',
        // backgroundColor: 'rgba(0, 0, 0, 0.2)',
        // justifyContent: 'center',
        // alignItems: 'center',
        // overflow: 'hidden',
    },
    overlay: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 20,
        borderRadius: 12,
        margin: 10
    },
    text: {
        marginTop: 10,
        color: '#fff',
        fontSize: 14,
    },
    commentInput: {
        borderWidth: 1,
        height: 80,
        borderRadius: 10,
        color: colors.black,
        borderColor: colors.primary,
        padding: 5,
    }


})
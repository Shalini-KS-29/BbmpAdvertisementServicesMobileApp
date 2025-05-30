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
        fontWeight: 'bold',
        color: colors.primary
    },
    filterHeadText: {
        fontSize: FontSize.H3,
        fontWeight: '500',
        color: colors.white
    },
    selectedfilterHeadText: {
        fontSize: FontSize.H3,
        fontWeight: '500',
        color: colors.white
    },
    filterCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    addressText: {
        fontSize: FontSize.H4,
        // fontWeight: '300'
    },
    cardContainer: {
        flex: 1,
        marginHorizontal: 8,
        // flexDirection:'row'
        // marginVertical: 5
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
        marginVertical: 8,
        padding: 10,
        borderWidth: 0.3,
        borderRadius: 5,
        borderColor: colors.primary,
    },
    filterCardStyle: {
        height: 40,
        marginVertical: 8,
        // marginHorizontal: 2,
        marginLeft: 8,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: colors.lightBlue,
        // borderColor: colors.white,
    },
    selectedFilterCardStyle: {
        height: 40,
        marginVertical: 8,
        // marginHorizontal: 2,
        marginLeft: 8,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: colors.primary,
        borderColor: colors.white,
    },
    selectedCardStyle: {
        marginVertical: 15,
        padding: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: colors.primary
    }
})
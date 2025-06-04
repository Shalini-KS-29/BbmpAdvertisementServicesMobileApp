import { StyleSheet, Dimensions } from "react-native";
import { FontSize } from '../../constant/fontSize';
import colors from "../../constant/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    cardText: {
        fontSize: FontSize.H4,
        fontWeight: '500',
        color: colors.primary
    },
    addressText: {
        fontSize: FontSize.H2,
        fontWeight: 'bold',
        color: colors.primary
    },
    card: {
        // height: 250,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        // borderColor: colors.primary,
        // borderWidth: 1,
        // borderTopWidth: 2,
        // borderBottomWidth: 2,

        backgroundColor: '#D8E2DC'
        // backgroundColor: '#ADB5B0'
        // backgroundColor: '#FAD5EB'
        // backgroundColor: '#E5E4E2'

        // backgroundColor: '#FFE5D9'


        // borderTopColor: colors.primary,
        // borderBottomColor: colors.primary
    },
    textContainer: {
        flexDirection: 'row'
    },
    titleText: {
        width: '48%',
        fontSize: FontSize.H4,
        color: colors.primary,
        fontWeight: 'bold',
        // backgroundColor: colors.primary,
        // textAlign: 'center',
        margin: 5

    },
    colon: {
        width: '5%',
        fontSize: FontSize.H4,
        color: colors.primary,
        fontWeight: 'bold',
        margin: 5,
        textAlign: 'center',
    },
    valueText: {
        width: '50%',
        fontSize: FontSize.H4,
        fontWeight: '500',
        color: colors.primary,
        flexWrap: 'wrap',
        // textAlign: 'center',
        margin: 5
    },
    commentTitleText: {
        width: '48%',
        fontSize: FontSize.H4,
        color: colors.primary,
        fontWeight: 'bold',
        // backgroundColor: colors.primary,
        // textAlign: 'center',
        margin: 5

    },
    commentColon: {
        width: '5%',
        fontSize: FontSize.H4,
        color: colors.primary,
        fontWeight: 'bold',
        margin: 5,
        textAlign: 'center',
    },
    commentValueText: {
        width: '45%',
        fontSize: FontSize.H4,
        fontWeight: '500',
        color: colors.primary,
        flexWrap: 'wrap',
        // textAlign: 'center',
        margin: 5
    },
    image: {
        height: 70,
        width: 100,
        borderColor: colors.primary,
        // borderWidth: 1,
        margin: 5,
        borderRadius: 20
    },
    latlongStyle: {
        // width: '100%',
        backgroundColor: colors.previousPrimary,
        padding: 3,
        borderRadius: 5

    },
    latlLongTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // padding: 3
    },
    latLongTitleText: {
        // width: '50%',
        fontSize: FontSize.H4,
        color: colors.white,
        fontWeight: 'bold',
        // backgroundColor: colors.primary,
        // textAlign: 'center',
        margin: 5

    },
    latLongColon: {
        // width: '5%',
        fontSize: FontSize.H4,
        color: colors.white,
        fontWeight: 'bold',
        margin: 5,
        textAlign: 'center',
    },
    latLongValueText: {
        // width: '45%',
        fontSize: FontSize.H4,
        fontWeight: '500',
        color: colors.white,
        flexWrap: 'wrap',
        textAlign: 'center',
        margin: 5
    },
    idTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1
        // padding: 3
    },
    idContainerStyle: {
        // width: '100%',
        // borderWidth: 1,
        // borderColor: colors.primary,
        backgroundColor: colors.white,
        padding: 3,
        borderRadius: 5

    },
    idTitleText: {
        // width: '50%',
        fontSize: FontSize.H3,
        color: colors.primary,
        fontWeight: 'bold',
        // backgroundColor: colors.primary,
        // textAlign: 'center',
        margin: 5

    },
    idColon: {
        // width: '5%',
        fontSize: FontSize.H4,
        color: colors.primary,
        fontWeight: 'bold',
        margin: 5,
        textAlign: 'center',
    },
    idValueText: {
        // width: '45%',
        fontSize: FontSize.H3,
        fontWeight: '500',
        color: colors.primary,
        flexWrap: 'wrap',
        textAlign: 'center',
        margin: 5
    },
    cardContainer: {
        padding: 5,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 6,
        borderColor: colors.primary
    },
    commentCardContainer: {
        padding: 5,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 4,
        borderColor: colors.primary
    }
})
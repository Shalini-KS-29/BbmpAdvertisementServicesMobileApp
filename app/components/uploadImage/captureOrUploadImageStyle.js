import { StyleSheet } from "react-native";
import colors from "../../constant/colors";
import { FontSize } from "../../constant/fontSize";

export default StyleSheet.create({
    container: {
        // flex: 1
    },
    imageButton: {
        flexDirection: 'row',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    titleStyle: {
        fontSize: FontSize.H1,
        fontWeight: '800',
        color: colors.textSecondary,
        textAlign: 'center',
        margin: 20
    },
    textStyle: {
        fontSize: FontSize.H5,
        fontWeight: '800',
        color: colors.orange,
        textAlign: 'center',
        margin: 20,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        // padding: 2,
        // padding: 20,
        borderRadius: 5,
        // margin: 10
    },
    overlay: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'grey',
        borderWidth: 2,
        borderColor: colors.primary,
        padding: 20,
        borderRadius: 12,
        marginVertical: 8
    },
    text: {
        marginTop: 10,
        color: colors.primary,
        fontSize: 14,
    },
    imageContainer: {
        margin: 2,
        height: 200,
        // borderRadius: 2
        // width: 200

    }

})
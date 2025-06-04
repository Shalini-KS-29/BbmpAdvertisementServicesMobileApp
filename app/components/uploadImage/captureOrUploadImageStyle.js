import { StyleSheet } from "react-native";
import colors from "../../constant/colors";
import { FontSize } from "../../constant/fontSize";

export default StyleSheet.create({
    container: {
        height: 150,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 3,
        padding: 5,
        backgroundColor: colors.white,
        borderColor: colors.primary,
        maxWidth: '100%',
        borderRadius: 10
    },
    overlay: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.primary,
        padding: 20,
        width: '100%',
        borderRadius: 10,
    },
    addMore: {
        alignItems: 'center'
    },
    text: { marginTop: 10, fontSize: 16 },
    addMoreText: {
        marginTop: 10,
        fontSize: FontSize.H5,
        color: colors.primary,
        fontWeight: 'bold'
    },
    imageWrapper: {
        position: 'relative',
        marginRight: 10,
    },
    imageStyle: {
        width: 80,
        height: 80,
        borderRadius: 4,
        borderColor: colors.primary,
        borderWidth: 2,
    },
    deleteIcon: {
        position: 'absolute',
        top: -4,
        right: -4,
        backgroundColor: 'red',
        borderRadius: 12,
        zIndex: 2,
    }
})
import { StyleSheet } from "react-native";
import colors from "../../constant/colors";

export default StyleSheet.create({
    mainContainer: {
        height: 80,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    button: {
        backgroundColor: colors.primary,

        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',

    },
    disabledButton: {
        backgroundColor: '#a0a0a0',
        opacity: 0.6,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 30,
        paddingLeft: 15,
        margin: 10,
        height: 60,
        backgroundColor: colors.primary,
    },
    otpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    otpTextInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 30,
        paddingLeft: 15,
        margin: 10,
        width: '75%',
        height: 60,
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.white,
        backgroundColor: colors.primary,
    },
    input: {
        flex: 1,
        height: 40,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    otpInput: {
        height: 40,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    loaderWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
    },
    overlayWrapper: {
        // ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    transparentOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent black
    },
    verifyOtp: {
        fontWeight: '800',
        color: colors.previousPrimary,
        textAlign: 'center'
    }
});
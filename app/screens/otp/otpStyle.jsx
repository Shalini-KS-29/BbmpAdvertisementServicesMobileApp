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
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 5,
    },
    textStyle: {
        flexWrap: 'wrap',
        fontSize: FontSize.H1,
        fontWeight: '800',
        padding: 15,
        textAlign: 'center',
        color: colors.black
    },
    button: {
        marginHorizontal: 16,
        marginVertical: 10
    }

})
import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constant/colors";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        width: width - 20,
        borderRadius: 5,
        overflow: 'hidden',
    },
    image: {
        width: width - 20,
        borderWidth: 2,
        borderColor: colors.primary,
        height: 200,
        resizeMode: 'cover',
    },
});

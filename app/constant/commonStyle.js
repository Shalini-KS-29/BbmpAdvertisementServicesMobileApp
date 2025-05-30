import { StyleSheet, Dimensions } from "react-native";
import { FontSize } from "./fontSize";
import colors from "./colors";

export default StyleSheet.create({
    heading: {
        flexWrap: 'wrap',
        fontSize: FontSize.H2,
        fontWeight: '800',
        paddingTop: 15,
        textAlign: 'center',
        color: colors.textSecondary
    },
    headerTitleAlign: 'center'


})
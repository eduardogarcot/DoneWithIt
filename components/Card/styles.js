import {StyleSheet} from "react-native";
import colors from "../../config/colors";

export const styles = StyleSheet.create({
    cardContainer: {
        margin:10,
        backgroundColor: colors.white,
        borderRadius: 15,
        overflow: "hidden",
    },
    image: {
        width:'100%',
        height: 200,
    },
    informationContainer: {
        padding: 10,
    },
    title: {
        marginBottom: 7,
        fontWeight: "700",
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
})
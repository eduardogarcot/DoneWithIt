import {StyleSheet} from "react-native";
import colors from "../../config/colors";

export const styles = StyleSheet.create({
    button : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: colors.primary,
        padding: 15,
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    }
});

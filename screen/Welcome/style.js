import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logoContainer: {
        padding: 10,
        position: "absolute",
        top: 70,
        width: '100%',
        display: "flex",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoText: {
        marginTop: 10,
        fontWeight: "700",
    },
    buttonContainer: {
        paddingHorizontal: 20,
        width: "100%",
    }

})

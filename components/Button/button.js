import { TouchableOpacity, Text} from "react-native";
import {styles} from "./styles";
import colors from "../../config/colors";

const Button = ({text, action, color}) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={action}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
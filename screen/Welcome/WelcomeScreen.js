import React from 'react';
import {View, ImageBackground, Image} from "react-native";
import Button from "../../components/Button";
import {styles} from "./style";
import AppText from "../../components/Text";

const WelcomeScreen = () => {
    return (
        <ImageBackground
            style={styles.background}
            blurRadius={10}
            source={require("../../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../../assets/logo-red.png")}/>
                <AppText style={styles.logoText}>Sell What You Don't Need</AppText>
            </View>
            <View style={styles.buttonContainer}>
                <Button text="LOGIN" color="primary" action={()=>console.log('LOGIN')}/>
                <Button text="REGISTER" color="secondary" action={()=>console.log('REGISTER')}/>
            </View>

        </ImageBackground>
    );
};

export default WelcomeScreen;
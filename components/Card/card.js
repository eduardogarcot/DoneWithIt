import React from 'react';
import {View, Image } from "react-native";
import AppText from "../Text";
import {styles} from "./styles";

function Card({image, title, subtitle}) {
    return (
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.image}/>
            <View style={styles.informationContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    );
}
export default Card;
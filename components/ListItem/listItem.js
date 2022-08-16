import React from 'react';
import {Image, View} from "react-native";
import AppText from "../Text";
import {styles} from "./styles";

const ListItem = ({image, title, description}) => {
    return (
        <View style={styles.itemContainer}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.description}>{description}</AppText>
            </View>
        </View>
    );
};


export default ListItem;
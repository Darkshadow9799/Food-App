import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ResultDetails = ({ result }) =>{
    return (
        <View style={ styles.container }>
            <Image style={ styles.image } source={{ uri: result.image_url }} />
            <Text style={ styles.name }>{ result.name }</Text>
            <Text>{ result.rating } Stars, { result.review_count } Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        marginBottom: 5,
        width:250,
        height: 120,
        borderRadius: 4,
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultDetails;
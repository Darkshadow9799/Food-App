import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    },[]);

    if (!result){
        return null;
    };

    return (
        <View style={ styles.viewStyle }>
            <Text style={ styles.textStyle }>{ result.name }</Text>
            <FlatList 
              showsVerticalScrollIndicator = { false }
              data = { result.photos }
              keyExtractor = {(photo) => photo}
              renderItem = {({ item }) => {
              return <Image style={ styles.image} source={{ uri : item }} />
              }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginTop: 20,
        borderRadius: 7
    },
    viewStyle:{
        flex: 1,
        alignItems: 'center'
    },
    textStyle:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default ResultsShowScreen;
import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import ResultDetails from './ResultDetails';

const ResultsLists = ({ title,results }) => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.titleStyle }>{ title }</Text>
            <FlatList 
              horizontal
              data={ results }
              keyExtractor={(result)=> result.id }
              renderItem={({ item }) => {
                return <ResultDetails result={ item }/>
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    titleStyle: {
        marginBottom: 5,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    }
});

export default ResultsLists;
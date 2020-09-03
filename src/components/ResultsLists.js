import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import ResultDetails from './ResultDetails';
import { withNavigation } from "react-navigation";

const ResultsLists = ({ title,results,navigation }) => {

    if(!results.length ){
        return null;
    }

    return (
        <View style={ styles.container }>
            <Text style={ styles.titleStyle }>{ title }</Text>
            <FlatList 
              horizontal
              showsHorizontalScrollIndicator = { false }
              data={ results }
              keyExtractor={(result)=> result.id }
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('ResultsShow',{ id: item.id }) }>
                    <ResultDetails result={ item }/>
                  </TouchableOpacity>
                );
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

export default withNavigation(ResultsLists);
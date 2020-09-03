import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term,onTermChange,onTermSubmit }) => {
    return (
        <View style={ styles.backgroundStyle }>
            <Feather name="search" style={ styles.iconStyle }/>
            <TextInput
              autoCapitalize = "none"
              autoCorrect = { false }
              style={ styles.inputStyle } 
              placeholder="Search" 
              value={ term }
              onChangeText={ onTermChange }
              onEndEditing = { onTermSubmit }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor : '#A0A0A0',
        height: 50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom:10 
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        marginHorizontal: 15,
        fontSize:35,
        alignSelf: 'center'
    }
});

export default SearchBar;
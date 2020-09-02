import React,{ useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsLists from '../components/ResultsLists';

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //Price = $ || $$ || $$$
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View>
            <SearchBar
             term = { term }
             onTermChange = {setTerm}
             onTermSubmit = {() => searchApi(term) }
            />
            { errorMessage ? <Text>{ errorMessage }</Text> : null }
            <ResultsLists results={ filterResultsByPrice('$') } title="Cost Effective"/>
            <ResultsLists results={ filterResultsByPrice('$$') } title="Bit Pricer"/>
            <ResultsLists results={ filterResultsByPrice('$$$') } title="Bit Spender"/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
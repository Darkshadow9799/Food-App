import React,{ useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsLists';

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchapi,results,errorMessage] = useResults;

    const filterResultsByPrice = (price) => {
        //Price = $ || $$ || $$$
        return results.filter(results => {
            return results.price === price;
        });
    };

    return (
        <View>
            <SearchBar
             term = { term }
             onTermChange = {setTerm}
             onTermSubmit = {() => searchapi(term) }
            />
            { errorMessage ? <Text>{ errorMessage }</Text> : null }
            <ResultList results={ filterResultsByPrice('$') } title="Cost Effective"/>
            <ResultList results={ filterResultsByPrice('$$') } title="Bit Pricer"/>
            <ResultList results={ filterResultsByPrice('$$$') } title="Bit Spender"/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
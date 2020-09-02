import React,{ useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [results, setResults]=useState([]);
    const [errorMessage,setErrorMessage]=useState('');

    const searchapi = async (searchTerm) => {
        console.log("Hi there");
        try{
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }
        catch(err){
            setErrorMessage("Something went wrong");
        }
    };

    return (
        <View>
            <SearchBar
             term = { term }
             onTermChange = {setTerm}
             onTermSubmit = {() => searchapi(term) }
            />
            { errorMessage ? <Text>{ errorMessage }</Text> : null }
            <Text>We have found { results.length } results.</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
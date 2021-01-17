import SearchResultsCard from '../components/SearchResultsCard';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomSearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <View style={styles.main}>
      <View style={styles.searchResults}>
      <SearchResultsCard/>
      <SearchResultsCard/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    //flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: '20',
    // textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 300
  },

 
});

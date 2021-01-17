import SearchResultsCard from '../components/SearchResultsCard';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomSearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <View style={styles.container}>
        <Text style={styles.headingText}>Search the web, offline.</Text>
        <CustomSearchBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: '20',
    // textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 300,
  },
  headingText: {
      fontSize: 18,
    //   fontFamily: 'Inter',
      color:'#4D4D4D',
      paddingLeft: 10,
      paddingBottom: 10,
  }
});
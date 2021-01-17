import SearchResultsCard from '../components/SearchResultsCard';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomSearchBar from '../components/SearchBar';

export default function Directions() {
  return (
    <View style={styles.main}>
      <Image source={require('../assets/DirectionsResults.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    //flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: '20',
    // textAlign: 'center',
    //paddingLeft: 20,
    //paddingRight: 20,
    //paddingTop: 300
  },

 
});

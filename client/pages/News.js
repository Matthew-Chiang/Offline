import SearchResultsCard from '../components/SearchResultsCard';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomSearchBar from '../components/SearchBar';
import {Image} from 'react-native';
import { NewsCard, NewsCard2, NewsCard3, NewsCard4 } from '../components/NewsCard'

export default function News() {
  return (
    <View style={styles.main}>
      <CustomSearchBar onEnter={() => {}}/>
      <View style={styles.textContainer}>
        <Text style={styles.heading}> Latest News </Text>
       </View>
       <NewsCard/>
       <NewsCard2/>
       <NewsCard3/>
       <NewsCard4/>
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

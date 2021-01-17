import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchResults from './pages/SearchResults';
import News from './pages/News' ;
import Directions from './pages/Directions' ;
import Weather from './pages/Weather' ;
import Recipes from './pages/Recipes'

export default function App() {
  return (
    <View>
      <News/>
      {/* <Text>test</Text> */}
    </View>
    
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

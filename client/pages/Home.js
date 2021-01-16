import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomSearchBar from '../components/SearchBar';
// import Navbar from '../components/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Search the web, offline tests.</Text>
      {/* <StatusBar style="auto" /> */}
      <CustomSearchBar/>
      {/* <Navbar/> */}

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
    paddingTop: 300
  },
});

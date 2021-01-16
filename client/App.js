import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {
  
  // let [fontsLoaded] = useFonts({
  //   Inter_900Black,
  // });
  return (
    <View>
      <Home/>
      {/* <Text style={{fontFamily:"Inter_900Black"}}>Hello from app</Text> */}
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

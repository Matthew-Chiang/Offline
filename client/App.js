import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";

export default function App() {
    const [page, setPage] = useState('Home');

    renderPages = (page) => {
      switch (page){
        case 'Home':
          return <Home
              style={{
                  paddingBottom: 200,
                  marginBottom:100
              }}
              nextComponent={() => {
                setPage("SearchResults");
              }}/>;
        case 'SearchResults':
          return (<SearchResults 
            nextComponent={() => {
              setPage("News");
            }} />)
        case 'News':
          return <News/>
      }
    }

    return (
            <View style={styles.container}>
              {renderPages(page)}
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: "white",
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: '20',
        // textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50,
        paddingBottom
    },
});

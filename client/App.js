import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";

export default function App() {
    return (
        <View>
            <SearchResults />
            {/* <Text>test</Text> */}
            <Home />
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
        alignItems: "center",
        justifyContent: "center",
    },
});

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";

export default function App() {
    [showResults, setShowResults] = useState(false);
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <SearchResults />
                <Home
                    style={{
                        paddingTop: 200,
                        paddingBottom: 200,
                    }}
                    nextComponent={() => {
                        setShowResults(true);
                    }}
                />
                {showResults && <SearchResults />}
            </View>
            {/* //{" "}
            <View style={styles.container}>
                // <Text>Open up App.js to start working on your app!</Text>
                // <StatusBar style="auto" />
                //{" "}
            </View> */}
        </ScrollView>
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
    },
});

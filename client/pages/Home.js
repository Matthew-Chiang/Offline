import SearchResultsCard from "../components/SearchResultsCard";
import MediumCard from "../components/MediumCard";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import CustomSearchBar from "../components/SearchBar";

const { width } = Dimensions.get("window");

export default function SearchResults(props) {
    return (
        <ScrollView>
            <View style={styles.main}>
                <Text h2 style={styles.textStyle}>Search the web, offline.</Text>
                <CustomSearchBar onEnter={() => {props.nextComponent()}} styles={styles.main}/>
            </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    main: {
        //flex: 1,
        backgroundColor: "white",
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: '20',
        // textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 100,
        paddingBottom:100,
        marginTop:100
    },

    heading: {
        fontSize: 20,
        color: "#30566B",
    },

    heading2: {
        fontSize: 16,
    },

    textContainer: {
        padding: 10,
    },
    textStyle:{
        fontSize:18,
        paddingLeft:10
    },

    horCarousel: {},
});

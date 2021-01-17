import SearchResultsCard from "../components/SearchResultsCard";
import MediumCard from "../components/MediumCard";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import CustomSearchBar from "../components/SearchBar";

const { width } = Dimensions.get("window");

export default function SearchResults(props) {
    return (
        <CustomSearchBar onEnter={() => {props.nextComponent()}} />
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
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50,
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

    horCarousel: {},
});

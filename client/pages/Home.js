import SearchResultsCard from "../components/SearchResultsCard";
import MediumCard from "../components/MediumCard";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import CustomSearchBar from "../components/SearchBar";

const { width } = Dimensions.get("window");

export default function SearchResults() {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.main}>
                <CustomSearchBar onEnter={() => {}} />
                <View style={styles.textContainer}>
                    <Text style={styles.heading}> Recipes </Text>
                </View>

                <ScrollView
                    style={styles.horCarousel}
                    showsHorizontalScrollIndicator={false}
                    //pagingEnabled={true}
                    horizontal={true}
                    decelerationRate={0}
                    snapToAlignment={"center"}
                    contentInset={{
                        top: 30,
                        left: 30,
                        bottom: 30,
                        right: 30,
                    }}
                >
                    <MediumCard />
                    <MediumCard />
                    <MediumCard />
                    <MediumCard />
                </ScrollView>

                <View style={styles.textContainer}>
                    <Text style={styles.heading2}> More Results </Text>
                </View>
                <View style={styles.searchResults}>
                    <SearchResultsCard />
                    <SearchResultsCard />
                </View>
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

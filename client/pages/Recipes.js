import SearchResultsCard1 from "../components/SearchResultsCard1";
import SearchResultsCard2 from "../components/SearchResultsCard2";
import MediumCard1 from "../components/MediumCard1";
import MediumCard2 from "../components/MediumCard2";
import MediumCard3 from "../components/MediumCard3";
import MediumCard4 from "../components/MediumCard4";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import CustomSearchBar from "../components/SearchBarRecipes";

const { width } = Dimensions.get("window");

export default function SearchResults() {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.main}>
                <CustomSearchBar />
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
                    <MediumCard1 />
                    <MediumCard2 />
                    <MediumCard3 />
                    <MediumCard4 />
                </ScrollView>

                <View style={styles.textContainer}>
                    <Text style={styles.heading2}> More Results </Text>
                </View>
                <View style={styles.searchResults}>
                    <SearchResultsCard1 />
                    <SearchResultsCard2 />
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
        paddingTop: 30,
    },

    heading: {
        fontSize: 20,
        color: "#30566B",
        marginTop: -120,
    },

    heading2: {
        fontSize: 16,
    },

    textContainer: {
        padding: 10,
    },

    horCarousel: { marginTop: -90 },
});

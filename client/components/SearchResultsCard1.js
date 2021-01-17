import React from "react";

import { Text, View, StyleSheet } from "react-native";

export default class SearchResultsCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.link}>
                    https://cookieandkate.com/29-best-vegetarian-recipes/
                </Text>
                <Text style={styles.heading}>
                    V9 Best Vegetarian Recipes - Cookie and Kate
                </Text>
                <Text style={styles.body}>
                    Cookie and Kate's Best Vegetarian Recipes Trying to eat less
                    meat this year. Looking for Meatless Monday recipes. Wanting
                    to eat more veggies and whole\xa0...
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F3F3F3",
        borderRadius: 8,
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: '20',
        // textAlign: 'center',
        padding: 20,
        marginBottom: 8,
    },

    heading: {
        fontSize: 20,
    },

    body: {
        marginTop: 4,
        fontSize: 12,
    },

    link: {
        fontSize: 12,
        color: "#30566B",
    },
});

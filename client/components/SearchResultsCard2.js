import React from "react";

import { Text, View, StyleSheet } from "react-native";

export default class SearchResultsCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.link}>
                    'https://www.olivemagazine.com/recipes/vegetarian/quick-vegetarian-recipes-ready-in-under-30-minutes/'
                </Text>
                <Text style={styles.heading}>
                    '33 Quick Vegetarian Recipes And Easy Vegetarian Meals ...
                </Text>
                <Text style={styles.body}></Text>
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

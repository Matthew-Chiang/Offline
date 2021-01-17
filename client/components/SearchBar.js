//leaving comments here for now might need later
import { SearchBar } from "react-native-elements";
import React from "react";
import { StyleSheet, View, PermissionsAndroid } from "react-native";
import * as SMS from "expo-sms";
import SmsAndroid from "react-native-get-sms-android";

export default class CustomSearchBar extends React.Component {
    state = {
        search: "",
    };

    updateSearch = (search) => {
        this.setState({ search });
        console.log(search);
    };

    printSearch = (search) => {
        // this.setState({ search });
        console.log(search);
    };

    sendMessage = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.SEND_SMS,
            {
                title: "SMS Permission",
                message: "SMS permissions ",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK",
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            SmsAndroid.autoSend(
                "14167860936",
                "asdf",
                (fail) => {
                    console.log("Failed with this error: " + fail);
                },
                (success) => {
                    console.log("SMS sent successfully");
                }
            );
        } else {
            console.log("Sms permission denied");
        }
    };

    onSearchEnter = async () => {
        this.sendMessage();
        this.props.onEnter();
    };

    render() {
        const { search } = this.state;

        return (
            <SearchBar
                placeholder="Type your search here..."
                onChangeText={this.updateSearch}
                value={this.state.search}
                containerStyle={styles.container}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.input}
                onSubmitEditing={this.onSearchEnter}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,0)",
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginBottom: 150,
    },
    inputContainer: {
        backgroundColor: "#fff",
        elevation: 4,
        paddingTop: 0,
        paddingBottom: 0,
        minHeight: 43,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    input: {
        fontSize: 18,
        color: "#4D4D4D",
    },
});

//leaving comments here for now might need later
import { SearchBar } from "react-native-elements";
import React from "react";
import { PermissionsAndroid, StyleSheet, View } from "react-native";
import { NativeModules } from "react-native";

const DirectSms = NativeModules.DirectSms;

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

    // sendMessage = (number, message) => {
    //     SendSMS.send(123, "14167860936", "Hey.., this is me!\nGood to see you. Have a nice day.", (msg)=>{ alert(msg) });
    // };

    // const { result } = await SMS.sendSMSAsync(
    //     ['0123456789', '9876543210'],
    //     'My sample HelloWorld message',
    //     {
    //       attachments: {
    //         uri: 'path/myfile.png',
    //         mimeType: 'image/png',
    //         filename: 'myfile.png',
    //       },
    //     }
    // );

    sendMessage = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.SEND_SMS,
                {
                    title: "Offline App Sms Permission",
                    message: "Offline needs access to your inbox",
                    buttonNeutral: "Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK",
                }
            );
            console.log(NativeModules);
            console.log(DirectSms);
            DirectSms.sendDirectSms("14167860936", "direct message");
            // if (granted == PermissionsAndroid.RESULTS.GRANTED) {
            //     DirectSms.sendDirectSms("14167860936", "direct message");
            // } else {
            //     console.log("No SMS permissions");
            // }
        } catch (err) {
            console.warn(err);
        }
    };

    // const isAvailable = await SMS.isAvailableAsync();
    // if (isAvailable) {
    //   // do your SMS stuff here
    // } else {
    //   // misfortune... there's no SMS available on this device
    // }

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
                onSubmitEditing={this.sendMessage}
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
        paddingBottom: 150,
    },
    inputContainer: {
        backgroundColor: "#fff",
        elevation: 4,
        paddingTop: 0,
        paddingBottom: 0,
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

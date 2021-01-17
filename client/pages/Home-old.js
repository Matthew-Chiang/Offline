import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomSearchBar from "../components/SearchBar";
// import SendSMS from 'react-native-sms-x';

// SendSMS.send(123, "+959254687254", "Hey.., this is me!\nGood to see you. Have a nice day.", (msg)=>{ alert(msg) });

export default function App(props) {
    sendMessage = (number, message) => {
        SendSMS.send(
            123,
            "14167860936",
            "Hey.., this is me!\nGood to see you. Have a nice day.",
            (msg) => {
                alert(msg);
            }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Search the web, offline.</Text>
            <CustomSearchBar onEnter={props.nextComponent} />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: '20',
        // textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50,
    },
    headingText: {
        fontSize: 18,
        //   fontFamily: 'Inter',
        color: "#4D4D4D",
        paddingLeft: 10,
        paddingBottom: 10,
    },
});

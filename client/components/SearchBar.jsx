import { SearchBar } from 'react-native-elements';
// import React from 'react';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ClearIcon from './ClearIcon'

// import { SearchBar } from 'react-native-elements';

export default class CustomSearchBar extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
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
        // onClear={() => console.log("test")}
        // leftIconContainerStyle={styles.leftIconContainer}
        // clearIcon={<ClearIcon/>}
      />
    );
  }
}
  
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
},
inputContainer: {
    backgroundColor: "#fff",
    elevation: 4,
    height: 40,
    // paddingTop:20,
    // paddingBottom:20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
shadowOpacity: 0.23,
shadowRadius: 2.62,
},
leftIconContainer:{
    // widt
},
input: {
    fontSize: 18,
    color:'#4D4D4D',
}
});
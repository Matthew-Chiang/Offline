import { SearchBar } from 'react-native-elements';
// import React from 'react';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

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
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={this.state.search}
        lightTheme={true}
      />
    );
  }
}

// export default function CustomSearchBar(props) {
//     const [search, setSearch] = useState('');
    
//     const updateSearch = (search) => {
//     setSearch({ search });
//     };

//     return (
//         // <View style={styles.container}>
//             <SearchBar
//             placeholder="Type Here..."
//             onChangeText={updateSearch}
//             value={search}
//             lightTheme={true}
//             // searchIcon={true}
//             />
//         // </View>
//     );
// }
  
const styles = StyleSheet.create({
container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
},
});
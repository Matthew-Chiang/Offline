import React from 'react'

import { Text, View , StyleSheet} from 'react-native';


export default class SearchResultsCard extends React.Component{
    render () {
        return (
        <View style={styles.container}>
            <Text style={styles.link}>www.allrecipes.com > recipes > veg... </Text>
            <Text style={styles.heading}>Vegetarian Recipes | Allrecipes </Text>
            <Text style={styles.body}>A low-carb take on ravioli. Thin strips of zucchini are stuffed with a classic magro (lean) filling and pesto, topped with tomato sauce and cheese, then baked. Top with fresh hot chile peppers or pepper flakes and more Parmesan cheese. </Text>
        </View>
        )
    };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    borderRadius: 8,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: '20',
    // textAlign: 'center',
    padding: 20,
    marginBottom: 8,
    
    
  },

  heading:{
    fontSize: 20, 
  },

  body:{
    marginTop: 4,
    fontSize: 12,
  },

  link: {
    fontSize: 12,
    color: '#30566B',
  },
});

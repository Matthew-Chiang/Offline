import React from 'react'

import { Text, View , StyleSheet} from 'react-native';


export default class MediumCard extends React.Component{
    render () {
        return (
        <View style={styles.containerMed}>
            <Text style={styles.heading2}>Top 20 Vegetarian Recipes </Text>
            <Text style={styles.body}>Spaghetti squash, yams, parsnips, mushrooms </Text>
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

  containerMed: {
    backgroundColor: '#fff',
    borderRadius: 8,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: '20',
    // textAlign: 'center',
    padding: 20,
    marginTop: 8,
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 12,
    width: 144,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 8,
  },

  heading2:{
    fontSize: 18,
    fontWeight: "bold" 
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

  
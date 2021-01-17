import React from 'react'

import { Text, View , StyleSheet} from 'react-native';


export default class NewsCard extends React.Component{
    render () {
        return (
        <View style={styles.containerMed}>
            <Text style={styles.heading2}>Signal app goes down as users fllee new WhatsApp privacy terms</Text>
            <Text style={styles.heading3}>CTV News - 16 hours ago</Text>
            <Text style={styles.body}>Encrypted chat app Signal remained offline Saturday as the company dealt with technical difficulties amid a surge of... </Text>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 8,
  },

  heading:{
    fontSize: 18,
    fontWeight: "bold" 
  },

  heading2:{
    fontSize: 14,
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

  
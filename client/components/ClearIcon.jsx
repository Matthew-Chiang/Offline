
import React, { useState } from 'react';
import { Icon } from 'react-native-elements'

export default class CustomSearchBar extends React.Component {
    render () {
        return (
            <Icon
            raised
            name='clear'
            type='material'
            color='#f50'
            backgroundColor='rgba(0,0,0,0)'
            borderRadius='0'
            onPress={() => console.log('hello')} />
        )
    }
}
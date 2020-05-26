import React from 'react';
import {View, Text} from 'react-native'
import {TabBar} from '../../components'

const BasketView = () => {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{'Basket'}</Text>
            </View>
        )
}

export {BasketView};
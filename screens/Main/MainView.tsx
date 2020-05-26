import React, {useState} from 'react';
import {View, Text} from 'react-native'
import {SearchField} from '../../components';
import {StyleGuide} from '../../src/resources/StyleGuide';
import R from '../../src/resources/R';

const MainView = () => {
        const [searchString, setSearchString] = useState('');

        const changeSearchText = (text: string) => {
            setSearchString(text);
        }
    
        return(
            <View style={{flex: 1, padding: StyleGuide.spacing, backgroundColor:StyleGuide.colors.white}}>
                <SearchField value={searchString} onChangeText={changeSearchText} placeholder={R.strings.mainTab.searchField}/>
                <Text>{'Home'}</Text>
            </View>
        )
}

export {MainView};
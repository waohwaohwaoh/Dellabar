import React from 'react';
import {TextInput, View, StyleSheet, Image, Platform} from 'react-native';
import {ISearchField} from '../../src/interfaces/ISearchField';
import {StyleGuide} from '../../src/resources/StyleGuide';
import R from '../../src/resources/R';

const SearchField = ({value, onChangeText, placeholder}: ISearchField) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, StyleGuide.typography.searchField]}
        placeholder={placeholder}
      />
      <Image source={R.image.components.searchField} style={styles.image}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    paddingVertical: 7,
    alignItems: 'center',
    height: 35,
    backgroundColor: StyleGuide.colors.white,
    ...Platform.select({
        ios:{
            shadowColor: StyleGuide.colors.white,
            shadowOffset: {
                width: 1,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
        },
        android:{
            elevation: 3
        }
    }),
    paddingLeft: 21.24,
    borderRadius: 17.5,
  },
  image:{
      marginLeft: StyleGuide.spacing
  }
});

export {SearchField};

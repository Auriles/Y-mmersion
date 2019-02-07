import React from 'react';
import { View, Text, Image, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import MyHeader from './Header';

export  default class Category extends React.Component {
  static navigationOptions = () => {
      let drawerLabel = 'Categories'
      let drawerIcon = () => (
          <Image
              source={require('../icons/category.png')}
              style={{width:26, height:26, tintColor:'orange'}}
              />
      );
      return { drawerLabel, drawerIcon};
  }

  render() {
      const items = [
          { name: 'Vêtements' }, { name: 'Casques VR à louer' },
          { name: 'Albums' }, { name: 'Affiches' },
          { name: 'Figurines'}, { name: 'MUG'},
        ];

      return (<View style={{
          flex: 1,
          flexDirection: 'column',
      }}> 
      
      <MyHeader {...this.props} title="Categories" />
      <View style={{
              flex: 1,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center'
          }}>
          <FlatGrid
      itemDimension={200}
      items={items}
      style={styles.gridView}
      renderItem={({ item, index }) => (
        <View style={[styles.itemContainer, ]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <TouchableOpacity onPress={() => {Alert.alert('À la prochaine MAJ :) !!!!');}} >
          <Text style={styles.button}>Voir Produits</Text>
        </TouchableOpacity>
        </View>
      )}
    />
    </View>
      </View>);
  }

}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  button: {
    backgroundColor: '#E91E63',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 10,
    textAlign:'center',
  },
  itemContainer: {
    borderWidth:2,
    borderStyle:'solid',
    borderColor:'#d4d4d5',
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 200,
    shadowColor: '#d4d4d5',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 3,
  },
  itemName: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
    textAlign:'center',
    padding: 50,
  }
});
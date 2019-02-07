import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import MyHeader from './Header';

export default class Cart extends React.Component {
    static navigationOptions = () => {
        let drawerLabel = 'Panier'
        let drawerIcon = () => (
            <Image
                source={require('../icons/cart.png')}
                style={{width:26, height:26, tintColor:'#E91E63'}}
                />
        );
        return { drawerLabel, drawerIcon};
    }

    render() {
        const items = [{ name: 'Votre panier est vide' }];

        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        <MyHeader {...this.props}  title="Panier"/>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <FlatGrid
            itemDimension={200}
            items={items}
            style={styles.gridView}
            renderItem={({ item }) => (
        <View style={[styles.itemContainer, ]}>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
      )}
    />
                
            </View>
        </View>);
    }

}
const styles = StyleSheet.create({
    gridView: {
        marginTop: 0,
        flex: 1,
      },
      itemContainer: {
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'#d4d4d5',
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 100,

      },
      itemName: {
        fontSize: 18,
        color: 'black',
        fontWeight: '600',
        textAlign:'center',
        padding: 50,
      }
  });
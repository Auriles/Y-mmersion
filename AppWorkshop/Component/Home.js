import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Tabs from './Tabs';
import MyHeader from './Header';

export default class Home extends React.Component {
    static navigationOptions = () => {
        let drawerLabel = 'Accueil'
        let drawerIcon = () => (
            <Image
                source={require('../assets/img/image.png')}
                style={{width:26, height:26, tintColor:'green'}}
                />
        );
        return { drawerLabel, drawerIcon};
    }

    render() {
        return ( 
        <View style={styles.container}>
        <MyHeader {...this.props} title="Accueil" />
            <Tabs>
              {/* First tab */}
              <View title="Actualités" style={styles.content}>
                <Text style={styles.header}>
                  Aucune actualités
                </Text>
                <Text style={styles.text}>
                  ...
                </Text>
              </View>
              {/* Second tab */}
              <View title="Publications" style={styles.content}>
                <Text style={styles.header}>
                  Aucune publications
                </Text>
                <Text style={styles.text}>
                  ...
                </Text>
              </View>
    
            </Tabs>
          </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,                            
      backgroundColor: 'green',         
    },
    content: {
      flex: 1,                            
      justifyContent: 'center',           
      alignItems: 'center',
      backgroundColor: 'white',                         
    },
    header: {
      margin: 0,                         
      color: 'black',                   
      fontFamily: 'Avenir',               
      fontSize: 26,                       
    },
    text: {
      marginHorizontal: 20,               
      color: 'black', 
      textAlign: 'center',                
      fontFamily: 'Avenir',
      fontSize: 18,
    },
  });
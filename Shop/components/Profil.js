import React from 'react';
import {StyleSheet,Text,View,Image, Alert, TouchableOpacity} from 'react-native';
import MyHeader from './Header';

export default class Profil extends React.Component {
    static navigationOptions = () => {
        let drawerLabel = 'Profil'
        let drawerIcon = () => (
            <Image
                source={require('../icons/profil.png')}
                style={{width:26, height:26, tintColor:'blue'}}
                />
        );
        return { drawerLabel, drawerIcon};
    }

    render (){
        return (
            <View style={styles.container}>
            <MyHeader {...this.props} title="Profil" />
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'http://bootdey.com/img/Content/avatar/avatar7.png'}}/>

                <Text style={styles.name}>Joe Dalton </Text>
                <Text style={styles.info}> 23 ans</Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={require('../icons/id.png')}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Nom Complet : Joe Dalton</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={require('../icons/mail.png')}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Email : joe.dalton@ynov.com</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={require('../icons/mdp.png')}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Mot de passe : **********</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={require('../icons/birth.png')}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Age : 23 ans</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={require('../icons/tel.png')}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Tel : +33 601020304</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => {Alert.alert('À la prochaine MAJ :) !!!!');}} >
          <Text style={styles.button}>Modifier</Text>
        </TouchableOpacity>
          </View>
      </View>
        );
    }
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#DCDCDC",
    },
    headerContent:{
      padding:10,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
    },
    name:{
      fontSize:22,
      color:"#000000",
      fontWeight:'600',
    },
    userInfo:{
      fontSize:16,
      color:"#778899",
      fontWeight:'600',
    },
    body:{
      backgroundColor: "#778899",
      height:500,
      // alignItems:'center',
    },
    item:{
      flexDirection : 'row',
    },
    infoContent:{
      paddingLeft:5
    },
    iconContent:{
      marginLeft:30,
      paddingRight:5,
    },
    icon:{
      width:30,
      height:30,
      marginTop:20,
    },
    info:{
      fontSize:18,
      marginTop:20,
      color: "#FFFFFF",
    },
    button: {
      backgroundColor: '#DCDCDC',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 12,
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 10,
      margin: 15,
      textAlign:'center',
    }
  });
   
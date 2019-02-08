import React, {Component} from 'react';
import {StyleSheet,TouchableOpacity,View,Text, Image} from 'react-native';
import MyHeader from './Header';

export default class Deconnexion extends Component {
    static navigationOptions = () => {
     let drawerLabel = 'Deconnexion'
     let drawerIcon = () => (
         <Image
             source={require('../assets/img/logout.png')}
             style={{width:26, height:26, tintColor:'black'}}
             
             />
     );
     return { drawerLabel, drawerIcon};
     
 }
  render(){
      const {
          navigate
      } = this.props.navigation;
      return (
          <View style={style.button}>
                <MyHeader {...this.props} title="Deconnexion"/>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', flex: 1, height: 45}}>
                    <Text onPress={() => this.props.navigation.navigate("Login")} style={{fontSize: 18, color: 'black'}}>Se deconnecter</Text>
                 </TouchableOpacity>
          </View>
    )
  }
}

const style = StyleSheet.create({
    button: {
        flex: 1,
    }
})
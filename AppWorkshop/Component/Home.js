import React from 'react';
import { View, Text, Image } from 'react-native';

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
       return (<View style={{
           flex: 1,
           flexDirection: 'column',
       }}>
       <MyHeader {...this.props} title="Accueil" />
           <View style={{
               flex: 1,
               backgroundColor: 'green',
               alignItems: 'center',
               justifyContent: 'center'
           }}>

               <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                   This is Accueil Screen
               </Text>

           </View>
       </View>);
   }
}
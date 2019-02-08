import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Signup from '../Component/Signup'
import Login from '../Component/Login'
import Home from '../Component/Home'
import Category from '../Component/Category'
import Cart from '../Component/Cart'
import Sondage from '../Component/Sondage'
import Deconnexion from '../Component/Deconnexion'

const SearchStackNavigator = createDrawerNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    }, 
    Category: {
        screen : Category
    },
    Cart: {
        screen: Cart
    },
    Sondage: {
        screen : Sondage
    },
    Deconnexion: {
        screen: Deconnexion
    }
})

export default createAppContainer(SearchStackNavigator)
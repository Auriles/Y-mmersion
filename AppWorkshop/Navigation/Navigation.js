import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Signup from '../Component/Signup'
import Login from '../Component/Login'
import Home from '../Component/Home'
import Category from '../Component/Category'
import Cart from '../Component/Cart'

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
    }
})

export default createAppContainer(SearchStackNavigator)
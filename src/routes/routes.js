import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import { ActivityIndicator, AsyncStorage } from 'react-native'



import Login from '../Login/Login'
import CadastroRoutes from './CadastroRoutes'
import ClienteRoutes from './ClienteRoutes'
import EmpresaRoutes from './EmpresaRoutes'
import AuthLoadingScreen from '../Components/AuthLoadingScreen'

import DefinirRota from '../Components/DefinirRota'




//const AppStack = createSwitchNavigator({ DefinirRota, Cliente: ClienteRoutes, Empresa: EmpresaRoutes }, {initialRouteName: "DefinirRota"}) // ,{headerMode: "none"}
const AppStack = createSwitchNavigator({ Cliente: ClienteRoutes, Empresa: EmpresaRoutes }) // ,{headerMode: "none"}
const AuthStack = createStackNavigator({ Login, CadastroRoutes });




const StartContainer = createAppContainer(createSwitchNavigator(
    {
        //AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth'
    }
))

const StartRoute = ()=> (
    <StartContainer />
)

 






export default StartRoute 
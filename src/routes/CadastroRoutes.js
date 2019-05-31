import React from 'react'
import { createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation'

import  EscolherTipo  from '../SignUp/EscolherTipo'
import  SignUpCliente from '../SignUp/SignUpCliente'
import SignUpEmpresa from '../SignUp/SignUpEmpresa'


const SignUpStack = createStackNavigator({ 
    EscolherTipo: EscolherTipo,
    SignUpCliente: SignUpCliente,
    SignUpEmpresa: SignUpEmpresa,
},{
    initialRouteName: "EscolherTipo",
    headerMode: "none",
})



export default createAppContainer(SignUpStack)
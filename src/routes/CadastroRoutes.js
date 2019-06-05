import React from 'react'
import { createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation'

import  EscolherTipo  from '../SignUp/EscolherTipo'
//import  SignUpCliente from '../SignUp/SignUpCliente'
//import SignUpEmpresa from '../SignUp/SignUpEmpresa'
import FinalizarCadastroCliente from './ClienteFinalizarCadastro'
import FinalizarCadastroEmpresa from './EmpresaFinalizarCadastro'


const SignUpStack = createStackNavigator({ 
    EscolherTipo: EscolherTipo,
    SignUpCliente: FinalizarCadastroCliente,
    SignUpEmpresa: FinalizarCadastroEmpresa,
},{
    initialRouteName: "EscolherTipo",
    headerMode: "none",
})



export default createAppContainer(SignUpStack)
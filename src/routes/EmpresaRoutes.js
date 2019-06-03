import React from 'react'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import EmpresaMain from '../Empresa/EmpresaMain'
import Agendamentos from '../Empresa/Agendamentos'

const Empresa = () => <EmpresaMain/>
const Ag = () => <Agendamentos />


const BottomNavigator = createMaterialBottomTabNavigator({
    Empresa: {screen: Empresa, navigationOptions: {
        tabBarLabel: "Home",
    }},
    Agendamentos: {screen: Ag, navigationOptions: {
        tabBarLabel: "Agendamentos"
    }}
}, {
    initialRouteName: "Empresa",
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#80c635', alignContent: "center", fontSize: 30},
})

export default BottomNavigator
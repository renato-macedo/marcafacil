import React from 'react'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import EmpresaMain from '../Empresa/EmpresaMain'
// import Agendamentos from '../Empresa/DatasDisponiveis'
import DatasNavigator from  './DataHorarios'

const Empresa = () => <EmpresaMain/>
const Ag = () => <DatasNavigator />


const BottomNavigator = createMaterialBottomTabNavigator({
    Empresa: {screen: Empresa, navigationOptions: {
        tabBarLabel: "Home",

    }},
    Agendamentos: {screen: Ag, icon: "search",
        navigationOptions: {
        tabBarLabel: "Datas",
        
    }}
}, {
    initialRouteName: "Empresa",
    activetTintColor: 'white',
    inactiveTintColor: '#ddd',
    labeled: true,


})

export default BottomNavigator
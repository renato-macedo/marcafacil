import React from 'react'
import {createAppContainer, createStackNavigator} from 'react-navigation'
import Buscar from '../Cliente/Buscar'
import EmpresaCard from '../Components/EmpresaCard'
import DatasDaEmpresa from '../Cliente/DatasDaEmpresa'
import HorariosDaEmpresa  from '../Cliente/HorariosDaEmpresa'


const StackNavigator =  createStackNavigator({
    Buscar: Buscar,
    EmpresaCard: EmpresaCard,
    DatasDaEmpresa: DatasDaEmpresa,
    HorariosDaEmpresa: HorariosDaEmpresa
}, {
    initialRouteName: "Buscar",
    headerMode: "none"
})



export default createAppContainer(StackNavigator)
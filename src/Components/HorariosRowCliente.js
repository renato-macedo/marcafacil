import React, {Component} from 'react'

import {StyleSheet,View, TouchableOpacity, AsyncStorage,  ActivityIndicator, Alert } from 'react-native'
import { List } from 'react-native-paper';
import { novoAgendamento } from '../services/agendamentos'
import {obterNomeDoUsuario} from '../services/FazerLoginComEmailESenha'



export default class HorarioRow extends Component {
    
    state = {
        animating: false
    }
    showAlert = () =>{
        Alert.alert('Agendamento realizado com sucesso!')
    }

    closeActivityIndicator = () => this.setState({animating: false})

    showActivityIndicator = () => this.setState({animating: false})

    agendar = async () => {
        this.showActivityIndicator()
        const userId = await AsyncStorage.getItem("userId")
        console.log(userId)
        console.log(this.props.data)
        console.log(this.props.horario)
        console.log(this.props.empresaId)
        const nomeEmpresa = this.props.empresaNome
        console.log(nomeEmpresa)
        const clienteNome = await obterNomeDoUsuario(userId)
        console.log(clienteNome)
        const endereco = this.props.endereco
        console.log(endereco)
        let Agendamento = {
            clienteNome: clienteNome,
            clienteId: userId,
            empresaNome: nomeEmpresa ,
            empresaId: this.props.empresaId ,
            data: this.props.data ,
            hora: this.props.horario,
            endereco: endereco
        }
        console.log(`marcando para `)
        await novoAgendamento(Agendamento)
        this.closeActivityIndicator()
        this.showAlert()

    } 
    render() {
        return (
            <View>
            <TouchableOpacity onPress={this.agendar}>
            <List.Item
                title={this.props.horario}
                left={props => <List.Icon  icon="access-time" />}
                />
            </TouchableOpacity>
            <ActivityIndicator animating={this.state.animating} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        //flexDirection: "row",
        //justifyContent: "center",
        //backgroundColor: "red",

    },
    view: {

    },
    button: {
        width: "20%",
        borderColor: "red",
        borderBottomWidth: 1,
        borderRadius: 0
    }
})
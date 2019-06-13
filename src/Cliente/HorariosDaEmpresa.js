import React, {Component} from 'react'
import {StyleSheet, View, FlatList} from 'react-native'
import {Text} from 'react-native-paper'
import { ObterHorariosDeData} from '../services/ManipularDatas'
import HorarioRowCliente from '../Components/HorariosRowCliente'




export default class Horarios extends Component {
    state = {
        horarios: [],
        data: '',
        empresaId: ''
    }

    // ------------- Flat List------------
    async componentDidMount() {
        const { navigation } = this.props;
        const data = navigation.getParam('data')
        const userId = navigation.getParam('userId')
        const endereco = navigation.getParam('endereco')
        const empresaNome = navigation.getParam('empresaNome')
        console.log(data + "  "+userId)
        try {
            const horarios = await ObterHorariosDeData(userId, data)
            this.setState({horarios, data, empresaId: userId, empresaNome, endereco },() => {
                console.log(this.state)
            })
        } catch (error) {
            console.log(error.message)
        }
         
    }

    renderItem = ({item}) => {
        return <HorarioRowCliente horario={item} data={this.state.data} empresaId={this.state.empresaId} key={item} empresaNome={this.state.empresaNome} endereco={this.state.endereco}/>
    }


    render() {

        return (
            <View style={{flex: 1}}>
                {this.state.horarios.length==0 && <Text>Você não adicionou horários para esta data</Text> }
                <FlatList 
                    data={this.state.horarios}
                    keyExtractor={item=> item}
                    renderItem={this.renderItem}
                />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        width: "90%"
    }
})
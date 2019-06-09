import React, {Component} from 'react'
import {StyleSheet, View, FlatList} from 'react-native'
import {Button, Text} from 'react-native-paper'
import { ObterHorariosDeData, AdicionarNovoHorarioEmDataDoc } from '../services/ManipularDatas'
import DateTimePicker from "react-native-modal-datetime-picker";
import HorarioRow from '../Components/HorariosRow'
import { HoraEmString } from '../Auxiliar/yyyymmdd'


const a = ["09:00", "17:00"]
export default class Horarios extends Component {
    state = {
        horarios: [],
        isDateTimePickerVisible: false
    }

    // ------------- Flat List------------
    async componentDidMount() {
        const { navigation } = this.props;
        const data = navigation.getParam('data')
        const userId = navigation.getParam('userId')
        console.log(data + "  "+userId)
        try {
            const horarios = await ObterHorariosDeData(userId, data)
            this.setState({horarios},() => {
                console.log(this.state)
            })
        } catch (error) {
            console.log(error.message)
        }
         
    }

    renderItem = ({item}) => {
        return <HorarioRow horario={item} key={item} />
    }



    //--------------------------DatePicker-----------------
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };
    
    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };
    
    handleDatePicked = async (horario) => {
        horario = HoraEmString(horario)
        console.log(horario)
        // console.log(this.state.userId)
        const { navigation } = this.props;
        const data = navigation.getParam('data')
        const userId = navigation.getParam('userId')
        console.log(userId)
        await AdicionarNovoHorarioEmDataDoc(userId, horario, data)
        
        try {
            const horarios = await ObterHorariosDeData(userId, data)
            this.setState({horarios},() => {
                console.log(this.state)
            })
        } catch (error) {
            console.log(error.message)
        }
        this.hideDateTimePicker();

    };
    render() {

        return (
            <View style={{flex: 1}}>
                {this.state.horarios.length==0 && <Text>Você não adicionou horários para esta data</Text> }
                <FlatList 
                    data={this.state.horarios}
                    keyExtractor={item=> item}
                    renderItem={this.renderItem}
                />
                <>
                <DateTimePicker
                    mode="time"
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                    
                />
                </>
                <Button style={styles.button} onPress={this.showDateTimePicker} icon="add">Novo Horário</Button>

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
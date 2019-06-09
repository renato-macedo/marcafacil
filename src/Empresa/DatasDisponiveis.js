import React, {Component} from 'react'

import {StyleSheet, View, FlatList, AsyncStorage} from 'react-native'
import {Text, Appbar, FAB } from 'react-native-paper';
import DateTimePicker from "react-native-modal-datetime-picker";


import DataRow from '../Components/DataRow'

import {ObterDatas, CriarColecaoDeHorariosEmEmpresa } from '../services/ManipularDatas'
import { yyyymmdd } from "../Auxiliar/yyyymmdd";




//const dts = ["2019-06-23", "2019-06-22","2019-06-23", "2019-06-22", "2019-06-23", "2019-06-22", "2019-06-23", "2019-06-22", "2019-06-23", "2019-06-22", "2019-06-23", "2019-06-22"]
class Agendamentos extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        datas: [],
        isDateTimePickerVisible: false,
        userId: ''
    }

    
    renderHeader = () => {
        return (
            <Appbar>
                <Appbar.Action icon="add-circle-outline" onPress={() => this.showDatePicker} />
            </Appbar>
        )
    };

    async componentDidMount() {
        const userId = await AsyncStorage.getItem("userId")
        ObterDatas(userId).then((datas) => {
            this.setState({datas: datas}, () => {
                console.log(this.state.datas)
            })
        })
        this.setState({userId})

    }

    //------FlatList----------
    renderItem = ({item}) => (
        <DataRow key={item} navigation = {this.props.navigation} userId ={this.state.userId} data={item}/>
    )


    //-------DatePicker---------
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };
    
    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };
    
    handleDatePicked = async (date) => {
        date = yyyymmdd(date)
        console.log(date)
        console.log(this.state.userId)
        await CriarColecaoDeHorariosEmEmpresa(this.state.userId,date)
        
        ObterDatas(this.state.userId).then((datas) => {
            this.setState({datas: datas}, () => {
                console.log("Estado das datas",this.state.datas)
            })
        })
        console.log("A date has been picked:", date);
        this.hideDateTimePicker();

    };
    
    render() {
        return (

            <View style={styles.container}>
                <Appbar>
                    <Appbar.Content title={"Marca Fácil"} />
                </Appbar>
                
                <FlatList
                    data={this.state.datas}
                    keyExtractor={item=> item}
                    renderItem={this.renderItem} 
                />
                <>
                <DateTimePicker
                    mode="date"
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                    minimumDate={new Date()}
                />
                </>
                    <FAB style={styles.fab} onPress={this.showDateTimePicker} icon="add" />
            </View>
  
 
        )
    }
}







const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FBFFF1"

    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    fab: {
        //backgroundColor: "blue",
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
});
  

export default Agendamentos


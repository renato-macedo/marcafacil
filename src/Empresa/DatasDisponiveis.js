import React, {Component} from 'react'

import {StyleSheet, View, FlatList} from 'react-native'
import {BottomNavigation, Text, TextInput, Appbar } from 'react-native-paper';

import TimePicker from '../Components/EscolherHora'
import DatePicker from '../Components/EscolherData'
import DataRow from '../Components/DataRow'

import {ObterDatas} from '../services/ManipularDatas'




//const datas = ["2019-06-23", "2019-06-22"]
class Agendamentos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            datas: []
        }
    }

    componentDidMount() {
        let datas = ObterDatas("BFbZnoxwMscbCWTBt8Ziz39EPbQ2")
        console.log(datas)
        this.setState({datas: datas})
    }

    renderItem = ({item}) => (
        <DataRow key={item} data={item}/>
    )
    


    loadDatas = ()=>{

    }
    
    render() {
        return (
            <View>
                
                <FlatList
                    data={this.state.datas}
                    keyExtractor={item=> item}
                    renderItem={this.renderItem} />
                    
            </View>
        )
    }
}







const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
});
  

export default Agendamentos


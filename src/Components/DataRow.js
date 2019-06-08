import React, {Component} from 'react'

import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native'
import {BottomNavigation, Text, List } from 'react-native-paper';

import TimePicker from '../Components/EscolherHora'
import DatePicker from '../Components/EscolherData'

export default class DataRow extends Component {
    
    getData = () =>{
        console.log(this.props.data)
    }
    render() {
        return (
        <TouchableOpacity style={styles.row} onPress={this.getData}>
            <List.Item
                title={this.props.data}
                description="Item description"
                left={props => <List.Icon {...props} icon="insert-invitation" />}
                />
          </TouchableOpacity>

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
        backgroundColor: "black",
    },
    button: {
        width: "20%",
        borderColor: "red",
        borderBottomWidth: 1,
        borderRadius: 0
    }
})
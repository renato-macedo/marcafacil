import React, {Component} from 'react'

import {StyleSheet,TouchableOpacity} from 'react-native'
import {Text, List } from 'react-native-paper';





export default class DataRow extends Component {
    
    getData = () =>{
        console.log(this.props.data)
    }
    render() {
        return (
        <TouchableOpacity style={styles.row} onPress={()=> this.props.navigation.navigate("Horarios",{data: this.props.data, userId: this.props.userId})}>
            <List.Item
                title={this.props.data}
                description="Item description"
                left={props => <List.Icon  icon="insert-invitation" />}
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
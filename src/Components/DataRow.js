import React, {Component} from 'react'

import {StyleSheet,TouchableOpacity} from 'react-native'
import {Text, List } from 'react-native-paper';





export default class DataRow extends Component {
    
    getData = () =>{
        console.log(this.props.data)
    }
    render() {
        return (
        <TouchableOpacity style={styles.row} onPress={()=> this.props.navigation.navigate(
            this.props.rota ,{data: this.props.data, userId: this.props.userId, endereco: this.props.endereco, empresaNome: this.props.empresaNome}
            )}>
            <List.Item
                title={this.props.data}

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
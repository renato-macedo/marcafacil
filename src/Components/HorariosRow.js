import React, {Component} from 'react'

import {StyleSheet,View } from 'react-native'
import {BottomNavigation, Text, List } from 'react-native-paper';





export default class HorarioRow extends Component {
    
    getData = () =>{
        console.log(this.props.data)
    }
    render() {
        return (
            <View style={styles.view}>
            <List.Item
                title={this.props.horario}
                description="Item description"
                left={props => <List.Icon  icon="access-time" />}
                />
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
import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'

class EscolherTipo extends Component {
    render () {
        return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Você é:</Text>
            
            <Button style={styles.buttom} onPress={()=>this.props.navigation.navigate('SignUpCliente')}>Cliente</Button>
            
            <Text style={styles.textStyle}>OU</Text> 
            
            <Button style={styles.buttom} onPress={()=>this.props.navigation.navigate('SignUpEmpresa')}>Empresa</Button>

            
        </View>
    )
    }        


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#effce0"
    },
    textStyle: {
        fontSize: 32,
        marginBottom: "10%"
    },
    buttom: {
        justifyContent: "center",
        width: "45%",
        marginBottom: "2%",

    }
})

export default EscolherTipo
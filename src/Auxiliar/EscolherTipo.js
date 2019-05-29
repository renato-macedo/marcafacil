import React from 'react';

import {StyleSheet, View} from 'react-native'
import {Buttom, Text } from 'react-native-paper'

export default class EscolherTipo {
    render() {
        return    (
            <View style={styles.container}>
                <Text>Você é:</Text>
                <Buttom>Cliente</Buttom>
                <Text>Ou</Text>
                <Buttom onPress={()=>this.props.navigations.navigate('SignUpEmpresa')} >Empresa</Buttom>
            </View>
        )
    }
} 




const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    buttom: {
        textAlign: "center",
        marginBottom: "5%",

    }
})


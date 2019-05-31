import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';


const SignUpEmpresa = () =>  (
            <View style={styles.container}>
                <Text style={styles.welcome}>Esta é a tela de Sign Up de Empresas</Text>
            </View>
        )


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
  
export default SignUpEmpresa
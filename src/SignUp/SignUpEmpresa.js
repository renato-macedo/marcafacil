import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormEmpresa from './formEmpresa'

const SignUpEmpresa = (props) =>  (
            <View style={styles.container}>
                <Text style={styles.welcome}>Esta é a tela de Sign Up de Empresas</Text>
                <FormEmpresa navigation={props.navigation}/>
            </View>
)


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',

    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
});


  
export default SignUpEmpresa
import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper'
import  FormCliente from './formCliente'


class SignUpCliente extends Component {

  
  render() {
    return (
      <View style={styles.container}>
          <FormCliente navigation={this.props.navigation} />
      </View>
  )
  }
}  
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
  
export default SignUpCliente

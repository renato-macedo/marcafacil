import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import {Text} from 'react-native-paper'

export default class AgendarForm extends Component {
    state = {
        erro: false
    }
    render() {
      return (
        <View style={styles.container}>

          <View style={styles.content}>

            {this.state.erro && <Text style={styles.erro}>Este usuario já existe</Text>}
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {

    //   backgroundColor: '#ecf0f1',
      justifyContent: "center",
      //alignItems: "center",

    },
    content: {
      padding: 16,
    },
    button: {
      marginTop: 16,
    },
    erro: {
        color: "red",
        alignSelf: "center"
    }
  });
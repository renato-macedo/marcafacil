import React, { Component } from 'react';
import {Searchbar, Banner, Button} from 'react-native-paper';
import {  View, StyleSheet, Image } from 'react-native'


class Pesquisa extends Component {
  state = {
    firstQuery: '',
  };

  pesquisar = (query) => {
    this.setState({ firstQuery: query },()=> {
        console.log(this.state.firstQuery)
    })
  }

  render() {
    const { firstQuery } = this.state;
    return (
       <View style={{alignItems: "stretch"}}>
        <Searchbar
           placeholder="Buscar um serviço"
           onChangeText={this.pesquisar}
           value={firstQuery}
       />
       <Button style ={styles.button} mode="contained" onPress={() => console.log(`Pesquisando: ${this.state.firstQuery} `)}>
       <Image source={require('../../assets/img/search-icon-white.png')} style={{width: 10, height: 10}} />
   </Button>
   </View>
    )
  }
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 360,
        alignSelf: "center",
        padding: 0,
    }
})

export default Pesquisa
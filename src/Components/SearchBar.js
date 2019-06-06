import React, { Component } from 'react';
import {Searchbar, Button} from 'react-native-paper';
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
       <View style={styles.container}>
        <Searchbar style={styles.searchbar}
           placeholder="Buscar um serviço"
           onChangeText={this.pesquisar}
           value={firstQuery}
       />
       <Button style ={styles.button} mode="contained" onPress={() => console.log(`Pesquisando: ${this.state.firstQuery} `)}>
       Buscar
   </Button>
   </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },

  searchbar: {
    width: "90%",
    backgroundColor: "#C5E1A5"
  },

  button: {
    borderRadius: 10,

    padding: 0,
   
    width: "90%",
    marginTop: "5%"
  },
  image: {
    flex:1,
    height: 30,
    width: 30,
    margin: 0
  }
})

export default Pesquisa
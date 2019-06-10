import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Searchbar, Button} from 'react-native-paper';

import EmpresaCard from '../Components/EmpresaCard'


class Agendar extends Component {
    state = {
        firstQuery: '',
        encontrados: [{nome: "Facebook", endereco: "Menlo Park"}, {nome: "Google", endereco: "Av. Brg. Faria Lima, 3477"}]
    };
    
    pesquisar = (query) => {
        this.setState({ firstQuery: query },()=> {
            console.log(this.state.firstQuery)
        })
    }

    renderItem = ({item}) => (
        <EmpresaCard key={item.nome} empresa={item} />
    )

    render() {
        const { firstQuery } = this.state;
        return (
            <View style={styles.container}>
            <View style={styles.header}>
                <Searchbar style={styles.searchbar} inputStyle={styles.searchInput}
                    placeholder="Busque por pessoas ou empresas..."
                    onChangeText={this.pesquisar}
                    value={firstQuery}
                />
                <Button style ={styles.button} mode="contained" onPress={() => console.log(`Pesquisando: ${this.state.firstQuery} `)}>
                    Buscar
                </Button>
            </View>
            <View>
                <FlatList
                    data={this.state.encontrados}
                    keyExtractor={item => item}
                    renderItem={this.renderItem} />
            </View>
        </View>    
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
    //   justifyContent: "center",
      alignItems: "center", 
      backgroundColor: '#FBFFF1',
    },
    searchbar: {
        width: "90%",
        borderColor: "#13315C",
        borderWidth: 2,
        marginTop: "4%",
        
    },
    searchInput:{
        fontSize: 14,
        justifyContent: "center"
    },
    button: {
        borderRadius: 10,
    
        padding: 0,
       
        width: "90%",
        marginTop: "5%",
    },

});
  
export default Agendar
import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Searchbar, Button} from 'react-native-paper';

import EmpresaCard from '../Components/EmpresaCard'
import {buscarEmpresa} from '../services/busca'

class Agendar extends Component {
    state = {
        firstQuery: '',
        encontrados: []
    };
    
    definirPesquisa = (query) => {
        this.setState({ firstQuery: query })
    }


    buscar = async () => {
        console.log(`Pesquisando: ${this.state.firstQuery} `)
        const dados = await buscarEmpresa(this.state.firstQuery)
        console.log(dados)
        this.setState({encontrados: dados})

    }

    renderItem = ({item}) => (
        <EmpresaCard key={item.empresaId} empresa={item.dados} />
    )

    render() {
        const { firstQuery } = this.state;
        return (
            <View style={styles.container}>
            <View style={styles.header}>
                <Searchbar style={styles.searchbar} inputStyle={styles.searchInput}
                    placeholder="Busque por pessoas ou empresas..."
                    onChangeText={this.definirPesquisa}
                    value={firstQuery}
                />
                <Button style ={styles.button} mode="contained" onPress={this.buscar}>
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
import React, {Component} from 'react';
import {StyleSheet, View, AsyncStorage, FlatList} from 'react-native';
import { Appbar } from 'react-native-paper';
import Agendamento from '../Components/Agendamento'

const agendamentos = [
    {empresa: "Renato Macêdo", data: "17/06/2019", hora: "14:00", status: "Confirmado", endereco: "Avenida Santos Dumont, 679"}
]
class Empresa extends Component {
    


    renderItem = ({item}) => (
        <Agendamento key={item.empresa} agendamento={item} />
    )

    deslogar = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('DefinirRota');
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Appbar>
                    <Appbar.Content title={"Marca Fácil"} />
                </Appbar>
                {/* <Button onPress={this.deslogar}>Deslogar</Button> */}
                <FlatList
                    data={agendamentos}
                    keyExtractor={item => item}
                    renderItem={this.renderItem} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
      backgroundColor: '#FBFFF1',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
});
  

export default Empresa
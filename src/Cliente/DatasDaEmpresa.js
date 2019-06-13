import React, {Component} from 'react'

import {StyleSheet, View, FlatList} from 'react-native'
import { Appbar } from 'react-native-paper';



import DataRow from '../Components/DataRow'





//const dts = ["2019-06-23", "2019-06-22","2019-06-23", "2019-06-22", "2019-06-23", "2019-06-22", "2019-06-23", "2019-06-22", "2019-06-23", "2019-06-22", "2019-06-23", "2019-06-22"]
class Agendamentos extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        datas: [],
        userId: ''
    }

    
    componentDidMount() {
        //const userId = await AsyncStorage.getItem("userId")
        const { navigation } = this.props;
        const datas = navigation.getParam('datas')
        const userId = navigation.getParam('userId')
        const empresaNome  = navigation.getParam('empresaNome')
        const endereco = navigation.getParam('endereco')
        
        this.setState({userId, datas, empresaNome, endereco})

    }

    //------FlatList----------
    renderItem = ({item}) => (
        //que coisa horrível
        <DataRow key={item} rota="HorariosDaEmpresa" navigation = {this.props.navigation} userId ={this.state.userId} data={item} endereco={this.state.endereco} empresaNome={this.state.empresaNome} />
    )




    
    render() {
        return (

            <View style={styles.container}>
                <Appbar>
                    <Appbar.Content title={"Marca Fácil"} />
                </Appbar>
                
                <FlatList
                    data={this.state.datas}
                    keyExtractor={item=> item}
                    renderItem={this.renderItem} 
                />
            </View>
  
 
        )
    }
}







const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FBFFF1"

    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    fab: {
        //backgroundColor: "blue",
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
});
  

export default Agendamentos


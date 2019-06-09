import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View, Text
} from 'react-native';

class DefinirRota extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        animating: true
    }
    

  }
  componentDidMount() {
    this.getUserTipoFromStorage();
  }
  // Fetch the Id from storage then navigate to our appropriate place
  getUserTipoFromStorage = async () => {
    const tipo = await AsyncStorage.getItem('tipo');
    if(tipo) {
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.setState({animating: false },() => {
            console.log(tipo)
            this.props.navigation.navigate(tipo==="Clientes" ? 'Cliente' : 'Empresa');
        })
    } else {
        this.props.navigation.navigate("Auth")
    }

   
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style = {styles.container}>
        <Text>Definindo Rota...</Text>
        <ActivityIndicator animating = {this.state.animating}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator} />
        {/* <StatusBar barStyle="default" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create ({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 70
    },
    activityIndicator: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       height: 80
    }
 })

export default DefinirRota
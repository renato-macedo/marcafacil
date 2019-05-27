import * as React from 'react';
import {StyleSheet} from 'react-native';
import {BottomNavigation, Text, TextInput } from 'react-native-paper';

const HomeRoute = () => <Text>Home</Text>
const AgendarRoute = () => <Text>Agendar</Text>


class BarraInferior extends React.Component {
    
    state = {
        index: 0,
        routes: [
            { key: "home", title: "Home", icon: "home"},
            { key: "agendar", title: "Agendar", icon: "schedule"}
        ]
    }
    
    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
      home: HomeRoute,
      agendar: AgendarRoute,
    });
  
    render() {
        return(
            <BottomNavigation 
            navigationState={this.state}
            onIndexChange={this._handleIndexChange}
            renderScene={this._renderScene}
            />
        )
    }
}

export default BarraInferior
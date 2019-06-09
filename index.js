/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
//import App from './src/App';
//import Login from './src/Login/Login'
import {name as appName} from './app.json';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import StartRoute from './src/routes/routes'
import StatusBar from './src/Components/StatusBar'




//AppRegistry.registerComponent(appName, () => Login);

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#13315C",
        accent: "#134074",

        
    },
}


export default function Main() {
    return (
        <PaperProvider theme={theme}>
            <StartRoute />
        </PaperProvider>
    )
}
// export default function Main() {
//     return (
//         <PaperProvider theme={theme}>
//             <App />
//         </PaperProvider>
//     )
// }
//AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(appName, () => Main);


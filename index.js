/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import Login from './src/Login/Login'
import {name as appName} from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';

// export default function Main() {
//     return (
//         <PaperProvider>
//             <Login />
//         </PaperProvider>
//     )
// }
//AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => Main);
AppRegistry.registerComponent(appName, () => Login);

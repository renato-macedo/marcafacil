import { createSwitchNavigator} from 'react-navigation';
import SignUp from '../SignUp/SignUpEmpresa'
import Login from '../Login/Login'

const FinalizarCadastro = createSwitchNavigator({ Login, SignUp }, {initialRouteName: "SignUp"});

export default FinalizarCadastro
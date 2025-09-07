import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CalculoScreen from './screens/calculo/CalculoScreen';
import HomeScreen from './screens/home/HomeScreen';
import ImcScreen from './screens/imc/ImcScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Calculadora" component={CalculoScreen} />
        <Drawer.Screen name="IMC" component={ImcScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Accueil from './Screen/Accueil';
import AdaLovelace from './Screen/Ada_LOVELACE';
import Personnage from './Screen/Personnage'
import Bio from './Screen/Biographie'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Nest () {
  return (
    <Drawer.Navigator initialRouteName='Ada Lovelace'>
      <Drawer.Screen name='Ada Lovelace' component={AdaLovelace}/>
      <Drawer.Screen name='Personnage' component={Personnage}/>
      <Drawer.Screen name='Biographie' component={Bio}/>
    </Drawer.Navigator>
    )
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Accueil' component={Accueil}/>
        <Stack.Screen name='vie' component={Nest} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};





// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

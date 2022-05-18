import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AdaLovelace from '../Screen/Ada_LOVELACE';
import Personnage from '../Screen/Personnage'
import Bio from '../Screen/Biographie'


const Drawer = createDrawerNavigator();

export default function Nest () {
  return (
    <Drawer.Navigator initialRouteName='Ada Lovelace'>
      <Drawer.Screen name='Ada Lovelace' component={AdaLovelace}/>
      <Drawer.Screen name='Personnage' component={Personnage}/>
      <Drawer.Screen name='Biographie' component={Bio}/>
    </Drawer.Navigator>
    )
};
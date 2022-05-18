import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { exp } from 'react-native-reanimated';

function Personnage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ada Lovelace, de son nom complet Augusta Ada King, comtesse de
Lovelace, née Ada Byron le 10 décembre 1815 à Londres et morte
le 27 novembre 1852 à Marylebone dans la même ville, est une
pionnière de la science informatique.</Text>
    </View>
  );
}

export default Personnage;
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { exp } from 'react-native-reanimated';

function Accueil({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome, Are you ready to get to know more about Ada LOVELACE</Text>
      <Button
        onPress={() => navigation.navigate('vie')}
        title="Ada LOVELACE"
      />
    </View>
  );
}

export default Accueil;
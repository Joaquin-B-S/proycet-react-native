import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import ListaUsuarios from './pantallas/ListaUsuarios'
import DetallesUsuario from './pantallas/DetallesUsuario'
import CrearUsuaio from './pantallas/CrearUsuario'

function MiStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListaUsuarios" component={ListaUsuarios} options={{title: 'One List'}}/>
      <Stack.Screen name="CrearUsuario" component={CrearUsuaio} options={{title: 'Crear nuevo funcionario'}}/>
      <Stack.Screen name="DetallesUsuario" component={DetallesUsuario} options={{title: 'Detalles del funcionario'}}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MiStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './screens/login';
import createUser from './screens/createUser';
import home from './screens/home';
import createCategory from './screens/createCategory';
import createProduct from './screens/createProduct';
import createProvider from './screens/createProvider';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Entrar" component={login} />
        <Stack.Screen name="Cadastre-se" component={createUser} />
        <Stack.Screen name="Início" component={home} />
        <Stack.Screen name="Cadastrar Categoria" component={createCategory} />
        <Stack.Screen name="Cadastrar Produto" component={createProduct} />
        <Stack.Screen name="Cadastrar Fornecedor" component={createProvider} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

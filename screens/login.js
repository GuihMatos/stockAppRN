import React from 'react';
import { View, StyleSheet, Button, Text, TextInput} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function createUser(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text style={styles.texto}>E-mail</Text>
            <TextInput
            style={styles.input}
            />

            <Text style={styles.texto}>Senha</Text>
            <TextInput
            style={styles.input}
            />

            <Button title='Entrar' onPress={() => navigation.navigate('Início')} />

            <Text style={styles.texto}>Ou, cadastre-se</Text>
            <Button title='Criar conta' onPress={() => navigation.navigate('Cadastre-se')} />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    input:{
        height: 45,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        fontSize: 20,
        padding: 10,
    },
    texto:{
        textAlign: 'center',
        fontSize: 15,
    }
});

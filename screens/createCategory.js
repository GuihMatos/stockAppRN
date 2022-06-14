import React from 'react';
import { View, StyleSheet, Button, Text, TextInput} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function createCategory(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text style={styles.texto}>Nome da Categoria</Text>
            <TextInput
            style={styles.input}
            />

            <Button title='Adicionar' onPress={() => navigation.navigate('Cadastrar Produto')} />

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

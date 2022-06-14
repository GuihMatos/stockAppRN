import React from 'react';
import { View, StyleSheet, Button, Text, TextInput} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function createProduct(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text style={styles.texto}>Nome do Produto</Text>
            <TextInput
            style={styles.input}
            />

            <Text style={styles.texto}>Código do Produto</Text>
            <TextInput
            style={styles.input}
            />

            <Text style={styles.texto}>Categoria</Text>
            <TextInput
            style={styles.input}
            />

            <Text style={styles.texto}>Valor Unitário</Text>
            <TextInput
            style={styles.input}
            />

            <Text style={styles.texto}>Quantidade</Text>
            <TextInput
            style={styles.input}
            />

            <Button title='Adicionar' onPress={() => navigation.navigate('Cadastrar Fornecedor')} />

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

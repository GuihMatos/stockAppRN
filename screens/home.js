import React from 'react';
import { View, StyleSheet, Button, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function home(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text style={styles.texto}>Cadastrar</Text>
            <Button style={styles.button} title='Produto' onPress={() => navigation.navigate('Cadastrar Produto')} />
            <Button style={styles.button} title='Categoria' onPress={() => navigation.navigate('Cadastrar Categoria')} />
            <Button style={styles.button} title='Fornecedor' onPress={() => navigation.navigate('Cadastrar Fornecedor')} />

            <Text style={styles.texto}>Atualizar</Text>
            <Button style={styles.button} title='Produto' onPress={() => navigation.navigate('Cadastrar Categoria')} />
            <Button style={styles.button} title='Categoria' onPress={() => navigation.navigate('Cadastrar Categoria')} />
            <Button style={styles.button} title='Fornecedor' onPress={() => navigation.navigate('Cadastrar Fornecedor')} />

            <Text style={styles.texto}>Deletar</Text>
            <Button style={styles.button} title='Produto' onPress={() => navigation.navigate('Cadastrar Produto')} />
            <Button style={styles.button} title='Categoria' onPress={() => navigation.navigate('Cadastrar Categoria')} />
            <Button style={styles.button} title='Fornecedor' onPress={() => navigation.navigate('Cadastrar Fornecedor')} />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    button:{
        padding: 20,
    },
    texto:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
        padding: 30
    }
});

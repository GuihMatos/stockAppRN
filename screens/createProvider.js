import React, {Component} from 'react';
import { View, StyleSheet, Button, Text, TextInput} from 'react-native';


class createProvider extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
            <View style={styles.container}>
    
                <Text style={styles.texto}>Nome do Fornecedor</Text>
                <TextInput
                style={styles.input}
                />
    
                <Text style={styles.texto}>Produto</Text>
                <TextInput
                style={styles.input}
                />

                <Button title='Adicionar'/>
    
            </View>
        );
    }
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


export default createProvider;
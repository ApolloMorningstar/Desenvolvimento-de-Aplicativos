import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';


const App_Banco = () => {
    const Logo_deuses_gregos = require('../splash-screen/pasta de imagens/logo_deuses.png');

    // const [modalVisible, setModalVisible] = useState(false);
    const [saldo, setSaldo] = useState(7320.92);
    const [valor, setValor] = useState('');

    const realizarSaque = () => {
        if (valor !== '') {
            const valorSaque = Number(valor);
            if (valorSaque > 0) {
                const multa = saldo * 0.025;
                const novoSaldo = saldo - valorSaque - multa;
                setSaldo(novoSaldo > 0 ? novoSaldo : 0);
                setValor(''); 
            } else {
                alert('O valor do saque deve ser positivo.');
            }
        } else {
            alert('Digite um valor para o saque.');
        }
    };

    const realizarDeposito = () => {
        if (valor !== '') {
            const valorDeposito = Number(valor);
            if (valorDeposito > 0) {
                const bonus = valorDeposito * 0.01;
                setSaldo(saldo + valorDeposito + bonus);
                setValor(''); 
            } else {
                alert('O valor do depósito deve ser positivo.');
            }
        } else {
            alert('Digite um valor para o depósito.');
        }
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.background}
            />
            <Image 
                style={styles.logo} 
                source={Logo_deuses_gregos} 
            />
            <View style={styles.content}>
                <Text style={styles.mensagem_de_saldo}>
                    Saldo Atual na sua Conta: 
                </Text>
                <Text style={styles.mensagem_de_saldo}>
                    R$ {saldo.toFixed(2)}
                </Text>
                
                <TextInput
                    style={styles.input}
                    placeholder="Digite o valor"
                    keyboardType="numeric"
                    value={valor}
                    onChangeText={setValor}
                />
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={realizarSaque}>
                        <Text style={styles.buttonText}>Saque</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={realizarDeposito}>
                        <Text style={styles.buttonText}>Depositar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    content: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        width: '80%',
        maxWidth: 400,
    },
    mensagem_de_saldo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#fafafa',
        borderRadius: 8,
    },
    buttons: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#1E90FF',
        padding: 15,
        borderRadius: 8,
        width: '45%',
        alignItems: 'center',
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    }
});

export default App_Banco;

import React, {useState} from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, Button} from 'react-native'

const SignUp = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    const registrarUsuario = async function() {
        if (!nome || !email || !senha) {
            console.log('Os parâmetros nome, email e senha não foram fornecidos');
            return; 
        }
        try {
            const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: nome,
                    email: email,
                    password: senha,
                }),
            });
            if (resposta.ok) {
                console.log('Usuário criado com sucesso');
            } else {
                console.log('Ocorreu um erro:', resposta.status);
            }
        } catch (error) {
            console.log('Erro na solicitação:', error);
        }
    }
    
    const Logo_deuses_gregos = require('./pasta_de_imagens/');
  
        
  return (
    <SafeAreaView style={styles.container}>
     <View>
            <Image 
                style={styles.logo} 
                source={Logo_deuses_gregos} 
            />
     </View>
     <View>
      <Text style={styles.Titulo}>Registrar</Text>
      <Text style={styles.label}>Nome: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNome(text)}
        value= {nome}
        placeholder="Digite seu Nome"
        keyboardType="default"
        autoCapitalize="words"
      />
      <Text style={styles.label}>Endereço de Email: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Digite seu Email"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Senha: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setSenha(text)}
        value={senha}
        placeholder="Digite sua senha"
        secureTextEntry={true}

      />
        <Pressable onPress={registrarUsuario} style={styles.Pressable} >
        <Text style={styles.button}>Cadastrar</Text>
        </Pressable>    
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F0F8FF',
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
        color: '#5D737E',
        fontFamily: 'Helvetica',
        marginLeft: 80,
    },
    Titulo: {
        fontSize: 24,
        color: '#5D737E',
        fontFamily: 'Helvetica',
        textAlign: 'center',
    },
    Pressable: {
        height: 40,
        marginBottom: 8,
        backgroundColor: '#B3E5FC',
        marginLeft: 80,
        marginRight: 80,
        borderColor: '#A7BBC7',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center', 
        alignItems: 'center', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    button: {
        fontSize: 18,
        fontFamily: 'Helvetica',
        textAlign: 'center', 
    },
    input: {
        height: 40,
        marginLeft: 80,
        marginRight: 80,
        borderColor: '#A7BBC7',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
});

export default SignUp;
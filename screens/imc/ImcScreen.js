import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import TextInputBox from '../../components/TextInputBox/TextInputBox';
import CustomButton from '../../components/CustomButtom/CustomButtom';
import MathUtils from '../../utils/MathUtils';

function CalculoScreen() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState('');
    const [mensagem, setMensagem] = useState('');

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>IMC</Text>
            <TextInputBox
            value={altura}
            onChangeText={setAltura}
            placeholder="Digite sua Altura em cm"
            keyboardType="numeric"
            />
            <TextInputBox
            value={peso}
            onChangeText={setPeso}
            placeholder="Digite o peso em kg"
            keyboardType="numeric"
            />
            <CustomButton
            title="Calcular"
            onPress={() => MathUtils.calculaIMC(peso,altura,setImc,setMensagem)}
            style={styles.button}
            />
            <Text style={styles.mensagem}>{imc ? `Seu IMC é: ${imc}` : 'Insira seus dados para calcular o IMC'}</Text>
            <Text style={styles.mensagem}>{mensagem? mensagem : ''}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    picker: {
        height: 50,
        width: 200,
    },
    mensagem: {
        fontSize: 18,
        marginBottom: 20,
    }
});

export default CalculoScreen;
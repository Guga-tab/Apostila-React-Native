import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import TextInputBox from '../../components/TextInputBox/TextInputBox';
import CustomButton from '../../components/CustomButtom/CustomButtom';
import MathUtils from '../../utils/MathUtils';

export default function BhaskaraScreen(){
    const [valueA, setValueA] = useState('')
    const [valueB, setValueB] = useState('')
    const [valueC, setValueC] = useState('')
    const [raiz, setRaiz] = useState('')

    return(
        <View style={styles.container}> 
            <StatusBar style="auto"/>

            <Text style={styles.title}>Calcular equação do segundo grau (Bhaskara)</Text>

            <TextInputBox
                value={valueA}
                onChangeText={setValueA}
                placeholder="Digite o valor de A"
                keyboardType='number'
            />

            <TextInputBox
                value={valueB}
                onChangeText={setValueB}
                placeholder="Digite o valor de B"
                keyboardType='number'
            />

            <TextInputBox
                value={valueC}
                onChangeText={setValueC}
                placeholder="Digite o valor de C"
                keyboardType='number'
            />

            {raiz.length > 0 && (
                <Text style={styles.mensagem}>
                    x1: {raiz[0]}, x2: {raiz[1]}
                </Text>
            )}

            <CustomButton
                title='Calcular'
                onPress={() => setRaiz(MathUtils.bhaskara(valueA, valueB, valueC))}
            />
        </View>
    )
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
        textAlign: 'center'
    },
    mensagem: {
        fontSize: 18,
        marginBottom: 20,
    }
})
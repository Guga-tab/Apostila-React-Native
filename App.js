import React , { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './componentes/CustomButtom/CustomButtom';
import TextInputBox from './componentes/TextInputBox/TextInputBox';
import FuncaoOp from './acoes/FuncaoOp';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [op, setOp] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

        <Text style={styles.title}>Quatro operações básicas</Text>
        <TextInputBox
          value={number1}
          onChangeText={setNumber1}
          placeholder="Digite o primeiro número"
          keyboardType="numeric"
        />
        <TextInputBox
          value={number2}
          onChangeText={setNumber2}
          placeholder="Digite o segundo número"
          keyboardType="numeric"
        />
        <TextInputBox
          value={op}
          onChangeText={setOp}
          placeholder="Digite o operador"
          keyboardType="default"
        />
        <CustomButton
          title="Somar"
          onPress={() => FuncaoOp(number1, number2, op)}
          style={styles.button}
        />
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
  }
});
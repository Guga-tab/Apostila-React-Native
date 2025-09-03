import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomButton from './componentes/Custombuttom/CustomButtom';
import TextInputBox from './componentes/TextInputBox/TextInputBox';
import CalculaMedia from './acoes/CalculaMedia';
import ImgAprovado from './componentes/Imgs/ImgAprovado';
import ImgReprovado from './componentes/Imgs/ImgReprovado';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [media, setMedia] = useState(null);

  let numbers = [number1, number2, number3];

  function img() {
    const mediaCalculada = CalculaMedia(numbers);

    if (isNaN(mediaCalculada)) {
      alert('Por favor, insira números válidos!');
      return;
    }

    setMedia(mediaCalculada);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Calcular Média</Text>

        {media !== null && media >= 6 ? <ImgAprovado /> : media !== null && <ImgReprovado />}

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
          value={number3}
          onChangeText={setNumber3}
          placeholder="Digite o terceiro número"
          keyboardType="numeric"
        />

        <Text style={styles.title}>
          {media !== null ? `Média: ${media}` : 'Digite os números para calcular'}
        </Text>

        <CustomButton
          title="Calcular"
          onPress={img}
          style={styles.button}
        />
      </ScrollView>
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
  button: {
    marginTop: 20,
  },
});

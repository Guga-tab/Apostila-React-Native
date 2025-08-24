import { Alert } from 'react-native';

export default function funcaoSoma(number1, number2) {
    const sum = parseFloat(number1) + parseFloat(number2);
    if (isNaN(sum)) {
        Alert.alert('Erro', 'Por favor, insira números válidos.');
        } else {
        Alert.alert('Resultado', `A soma é: ${sum}`);
    }
}
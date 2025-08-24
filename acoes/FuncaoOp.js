import { Alert } from 'react-native';

export default function funcaoOperacao(number1, number2, op) {
    let resultado

    switch(op){
        case "+":
            resultado = parseFloat(number1) + parseFloat(number2);
            break;
        case "-":
            resultado = parseFloat(number1) - parseFloat(number2);
            break;
        case "*":
            resultado = parseFloat(number1) * parseFloat(number2);
            break;
        case "/":
            if(number2 != 0){
                resultado = parseFloat(number1) / parseFloat(number2);
            } else {
                Alert.alert('Erro', 'Por favor, insira números válidos.');
            }
            break;
        default:
            Alert.alert('Erro', 'Por favor, insira números válidos.');
            return;
    }
    Alert.alert('Calculando...', `Resultado: ${resultado}`);
}

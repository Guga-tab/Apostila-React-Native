import { Alert } from 'react-native';

class MathUtils{
    static funcaoCalculo(number1, number2, acao) {
        var sum;
        switch (acao) {
            case '+':
            sum = parseFloat(number1) + parseFloat(number2);
            break;
            case '-':
            sum = parseFloat(number1) - parseFloat(number2);
            break;
            case '*':
            sum = parseFloat(number1) * parseFloat(number2);
            break;
            case '/':
            sum = parseFloat(number1) / parseFloat(number2);
            break;
            default:
            break;
        }

        if (isNaN(sum)) {
            Alert.alert('Erro', 'Por favor, insira números válidos.');
            } else {
            Alert.alert('Resultado', `A soma é: ${sum}`);
        }
    }

    static calculaIMC(peso, altura, setImc, setMensagem){
        if (!altura || !peso) {
            setImc('Erro: Insira valores válidos');
            return;
        }
        altura = altura /100;
        const imc = peso / (altura*altura);
        setImc(imc.toFixed(2));
        setMensagem(this.statusIMC(imc));
    }
    
    static statusIMC(imc){
        if(imc < 18.5){
            return "Abaixo do peso";
        }else if(imc < 24){
            return "Normal"
        }else if(imc < 30){
            return "SobrePeso grau 1";
        }else if(imc < 40){
            return "Obesidade grau 2"
        }else{
            return "Obsidade Grave grau 3";
        }
    }
}

export default MathUtils;
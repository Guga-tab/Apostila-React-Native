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

    static bhaskara(A, B, C){

        let numA = parseFloat(A)
        let numB = parseFloat(B)
        let numC = parseFloat(C)

        if(isNaN(numA) || isNaN(numB) || isNaN(numC)){
            alert("ERRO!!!")
            return
        }
        const delta = Math.pow(numB, 2) - 4 * numA * numC
        const x1 = (-numB + Math.sqrt(delta)) / (2 * numA)
        const x2 = (-numB - Math.sqrt(delta)) / (2 * numA)
        return [x1, x2]
    }
}

export default MathUtils;
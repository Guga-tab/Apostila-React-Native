export default function calculaMedia(numbers) {
    if (numbers.some(num => isNaN(Number(num)))) {
        return NaN;
    }

    function sum(x, y, z) {
        return x + y + z;
    }

    const numerosConvertidos = numbers.map(Number);
    let media = 0;
    if(numerosConvertidos.every((e) => e >= 0 && e <= 10)) {
        media = sum(...numerosConvertidos) / 3;
    } else {
        return NaN;
    }
        
    return media;
}

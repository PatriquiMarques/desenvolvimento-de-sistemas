import leia from 'readline-sync'
export default function exe19(){

    let numeroDigitado = leia.questionInt("Digite o número final")

    for (let i =0; i<= numeroDigitado; i++){
        console.log(i);
    }
}
import leia from 'readline-sync'
export default function exe20(){

let numeroDigitado = leia.questionInt ("Digite um número")


for (let i= numeroDigitado; i >= 0; i--){
    console.log(i);
}
    
}
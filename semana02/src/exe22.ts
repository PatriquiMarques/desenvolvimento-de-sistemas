import leia from 'readline-sync'
export default function exe22(){

    let menorValor = Number.MIN_VALUE;
    let maiorValor  = Number.MAX_VALUE;

    let i = 0;
    while (i<15){
        let numero = leia.questionInt(`Digite o número ${i+1}`)

        if (numero < menorValor){
            menorValor = numero;
        }

        if (numero < maiorValor){
            maiorValor = numero;
        }

    }

  

}
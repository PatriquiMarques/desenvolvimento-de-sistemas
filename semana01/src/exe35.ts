import leia from 'readline-sync'
export default function exe35() {

    let vetorNumeros: number[]= [];
    let mutiplicacao: number[] = [];

    for (let i = 0; i < 10; i++){

        vetorNumeros.push(leia.questionInt(`INFORME UM NÚMERO ${i+1}`));

    } 
    let j = 0;

    while(j<vetorNumeros.length){

        mutiplicacao[j] = vetorNumeros[j]*5
        j++
    }

    
}
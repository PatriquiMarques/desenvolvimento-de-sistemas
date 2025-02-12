import { keyInSelect } from "readline-sync"
import leia from 'readline-sync'
export default function exe10(){

let num = leia.questionInt ("Digite um número ")

    if (num % 2 == 0 ){

        console.log("O número digitado é Par")
    
    }else{
    console.log("O número é impar")}

    }


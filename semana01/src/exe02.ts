import leia from 'readline-sync';
export default function exe02(){


let altura = leia.questionFloat ("Digite a altura do triangulo: ");
let largura= leia.questionFloat ("Digite a largura do triangulo: "); 
let area = largura * altura;
console.log (area);

    
}
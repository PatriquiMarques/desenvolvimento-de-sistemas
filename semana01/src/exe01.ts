import leia from 'readline-sync';
export default function exe01(){

var num = leia.questionInt ("Digite um número: ")
var antecessor =num ;
console.log ('O NÚMERO DIGITADO :' + num);
console.log ('O ANTECESSO É: ' + antecessor);

}
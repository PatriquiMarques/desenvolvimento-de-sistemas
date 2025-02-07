import leia from 'readline-sync'
export default function exe06(){

let corridas = 0;

for (let i = 1; i <=5; i++){
	let corrida = leia.questionFloat ("Digite o valor da corrida: ");
	corridas = corridas + corrida;
}


console.log (`O valor arrecado pelo motorista com os descontos é R$ ${corridas - (corridas *0.25)}`);
}
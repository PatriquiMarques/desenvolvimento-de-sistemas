import leia from 'readline-sync'
export default function exe05(){

let celsius = leia.questionFloat (" Digite a temperatura que você deseja converter");

let escolha = leia.questionFloat ("Para converter a temperatura para Kelvin digite 1 para Fahrenheit Digite 2");

if (escolha == 1) {
	console.log(`Em kelvin essa temperatura é: ${ celsius + 273} °K`)

}else if(escolha == 2) {
	console.log(`Em Fahrenheit essa temperatura é: ${(celsius * 1.8) +32}°F `)
}else{

	console.log(" Opção inválida! Para transformar a temperatura para Kelvin digite 1 para Fahrenheit Digite 2")
}
}
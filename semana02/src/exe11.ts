import leia from 'readline-sync'
export default function exe11(){

let placa = leia.question("DIGITE A PLACA DO CARRO")
var ultimoDigito = placa [placa.length -1]

switch(ultimoDigito){
    case '0':
    case '1':
        console.log("Não pode rodar na segunda-feira")
        break;
    case '2':
    case '3':
        console.log("Não pode rodar na terça-feira")
        break;

    case '4':
    case '5':
        console.log("Não pode rodar na quarta-feira")
        break;
    case '6':
    case '7':
        console.log("Não pode rodar na quarta-feira")

        break;
        
    case '8':
    case '9':
        console.log("Não pode rodar na quarta-feira")
        break;
    default:
        console.log("Essa placa não é válida")
                
}



}
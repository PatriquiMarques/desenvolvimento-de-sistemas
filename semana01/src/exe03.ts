import leia from 'readline-sync'
export default function exe03(){

    let anos = leia.questionInt( "Digite a quantidade de anos: ");
    let meses = leia.questionInt( "Digite a quantidade de meses: ");
    let dias = leia.questionInt( "Digite a quantidade de dias: ");

    let totaldias = (anos * 365) + (meses * 30) + dias;

    console.log(totaldias);


    
}
import leia from 'readline-sync'
export default function exe37(){

    let numInteiro : number [] = [];
    let numPares: number []= [];

    let j =0;

    while(j<10){

        numInteiro.push(leia.questionInt(`Digite um número inteiro ${j}`))
        // para gerar automatico os numeros: numInteiro [j] =numInteiro.Math.trunc(Math.random ()*100)
    
            if(numInteiro[j]%2 ===0){
                numPares.push(numInteiro[j])   
            }
         j++
    }

        // poderia ser let numPares= numInteiro.filter((numero)=> numInteiro % 2 ===0);

    console.log(numInteiro);
    console.log(numPares)
}
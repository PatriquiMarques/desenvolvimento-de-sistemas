import leia from 'readline-sync'
export default function exe36(){


    let numUsuarios: number[] = [];
    let soma = 0;

    for(let i = 0; i<5; i++){

        numUsuarios[i] =leia.questionInt(`Digite o um número ${i}`);
        soma+= numUsuarios[i];
    }

    console.log(numUsuarios)
    console.log(soma)
}

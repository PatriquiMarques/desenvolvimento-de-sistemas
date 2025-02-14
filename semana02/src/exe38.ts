import leia from 'readline-sync'
export default function exe38(){

    let numUsuarios: number[]=[];
    let numResult: number[]=[];

    for (let i =0; i<10; i++){
        numUsuarios.push(leia.questionInt(`Digite um número`))
      // poderia ser assim   numUsuarios.push(Math.trunc(Math.random()*100))
        if(numUsuarios[i] >= 10)
            numResult.push(numUsuarios[i])
    }

    console.log(numResult)
    console.log(numUsuarios)
}
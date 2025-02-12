import leia from 'readline-sync'
export default function exe12(){

let qtdMaca = leia.questionInt("Digite a quantidade de maçã que deseja comprar")
let macaValores = (qtdMaca < 12)? 0.30: 0.25;
let valorCompra = qtdMaca * macaValores;
console.log(` O total da sua compra é: R$ ${ valorCompra.toFixed}`)
    

}
import leia from 'readline-sync'
export default function exe06(){

    let custoProduto = leia.questionFloat("Digite o valor de custo do produto /n R$")

    if (custoProduto < 20){
        
        custoProduto = custoProduto * 1.45
    }else {custoProduto = custoProduto *1.30};

    console.log(`O valor de venda do Produto é R$ ${custoProduto}`)

}

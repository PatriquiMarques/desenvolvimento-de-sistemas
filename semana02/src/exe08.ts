import leia from 'readline-sync'
export default function exe08(){

    let opcao = leia.questionFloat(" Para doar R$ 10,00 digite 01, Para doar R$ 25,00 Digite 2, Para doar R$ 25,00 Digite 2, Para doar R$ 50,00 Digite 3 ou Digite 0 para doar outro valor");

    if( opcao == 1 ){
        console.log(`Obrigado por doar R$ 10,00 para o Criança Esperança`)
    }else if( opcao == 2 ){
        console.log(`Obrigado por doar R$ 25,00 para o Criança Esperança`)
    }else if( opcao == 3 ){
        console.log(`Obrigado por doar R$ 50,00 para o Criança Esperança`)
    }else if( opcao == 0 ){
        let valor = leia.questionFloat  ('Digite o valor que deseja')
        console.log(`Obrigado por doar R$ ${valor} para o Criança Esperança`)
    }else{
        console.log("Opção inválida")
    }

}
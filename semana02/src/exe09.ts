import leia from 'readline-sync'
export default function exe09(){


let senha = leia.question("Digite sua senha de 4 dígitos")

if (senha == "1234"){

    console.log("Acesso Permitido")
    return;
} console.log("Acesso Negado")
}
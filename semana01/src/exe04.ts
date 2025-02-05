import leia from 'readline-sync'
export default function exe04(){

    let totalelitores = leia.questionFloat ("Digite a quantidade de eleitores: ")
    let brancos = leia.questionFloat ("Digite a quantidade de  votos brancos: ")
    let nulos = leia.questionFloat ("Digite a quantidade de votos nulos: ")
    let validos = leia.questionFloat ("Digite a quantidade de votos validos: ")

    let porcentobranco = (brancos/totalelitores) * 100;
    let porcentonulos = (nulos/totalelitores) * 100;
    let porcentovalidos (validos/totalelitores)*100;

    console.log(porcentobranco);
    console.log(porcentonulos);
    console.log(porcentovalidos);





    
}
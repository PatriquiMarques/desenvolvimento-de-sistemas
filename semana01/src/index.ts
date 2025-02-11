import leia from 'readline-sync';
import exe01 from './exe01';
import exe02 from './exe02';
import exe03 from './exe03';
import exe04 from './exe04';
import exe05 from './exe05';
import exe06 from './exe06';
import exe07 from './exe07';
import exe08 from './exe08';
import exe09 from './exe09';
import exe10 from './exe10';
import exe11 from './exe11';
import exe12 from './exe12';
import exe13 from './exe13';
import exe19 from './exe19';






const opcao = leia.keyInSelect([
    "1 - Exercicio 01",
    "2 - Exercicio 02",
    "3 - Exercicio 03",
    "4 - Exercicio 04",
    "5 - Exercicio 05",
    "6 - Exercicio 06", 
    "7 - Exercicio 07", 
    "8 - Exercicio 08", 
    "9 - Exercicio 09",
    "10 - Exercicio 10", 
    "11 - Exercicio 11", 
    "12 - Exercicio 12", 
    "13 - Exercicio 13",
    "19 - Exercicio 19", 
    "13 - Exercicio 13",    
    "13 - Exercicio 13",   
    "13 - Exercicio 13",

]) + 1;


const exercicios ={
    1: exe01,
    2: exe02,

}as {[key: number]: () => void}

exercicios[opcao]()
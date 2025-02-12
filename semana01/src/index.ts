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
import exe20 from './exe20';
import exe21 from './exe21';
import exe22 from './exe22';
import exe23 from './exe23';
import exe25 from './exe25';
import exe27 from './exe27';








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
    "13 - Exercicio 14",
    "19 - Exercicio 19", 
    "20 - Exercicio 20",    
    "21 - Exercicio 21",   
    "22 - Exercicio 22",
    "23 - Exercicio 23",    
    "25 - Exercicio 25",   
    "27 - Exercicio 27",

]) + 1;


const exercicios ={
    1: exe01,
    2: exe02,
    3: exe03,
    4: exe04,
    5: exe05,
    6: exe06,
    7: exe07,
    8: exe08,
    9: exe09,
    10: exe10,
    11: exe11,
    12: exe12,
    13: exe13,
    19: exe19,
    20: exe20,
    21: exe21,
    22: exe22,
    23: exe23,
    24: exe25,
    
  
  


}as {[key: number]: () => void}

exercicios[opcao]() 
import leia from 'readline-sync';
import exe35 from './exe35';
import exe36 from './exe36';
import exe37 from './exe37';
import exe38 from './exe38';






const opcao = leia.keyInSelect([
    "1 - Exercicio 35",
    "2 - Exercicio 36",
    "3 - Exercicio 37",
    "4 - Exercicio 38",
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
    1: exe35,
    2: exe36,
    3: exe37,
    4: exe38,
    
  
  


}as {[key: number]: () => void}

exercicios[opcao]() 
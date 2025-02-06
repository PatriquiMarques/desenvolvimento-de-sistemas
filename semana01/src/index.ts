import leia from 'readline-sync';
import exe01 from './exe01';
import exe02 from './exe02';
import exe03 from './exe03';
import exe04 from './exe04';
import exe06 from './exe06';


var opcao = leia.keyInSelect([
    "1 - Exercicio 01", "2 - Exercicio 02","3 - Exercicio 03","4 - Exercicio 04","5 - Exercicio 05","6 - Exercicio 06","7 - Exercicio 07"
]) + 1;

switch(opcao){
    case 1:
        exe01();
        break;
    case 2:
        exe02();
        break;
    case 3:
        exe03();
        break;    
    case 4:
        exe04();
        break; 
    case 5:
        break; 
    case 6:
        exe06();
        break;
    case 7:
        break;
    


}

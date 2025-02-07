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



var opcao = leia.keyInSelect([
    "1 - Exercicio 01", "2 - Exercicio 02","3 - Exercicio 03","4 - Exercicio 04","5 - Exercicio 05","6 - Exercicio 06", "7 - Exercicio 07", 
    "8- Exercicio 08", "9- Exercicio 09"]) + 1;

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
        exe05();
        break;   
    case 6:
        exe06();
        break;
    case 7:
        exe07;
        break;
    case 8:
        exe08()
        break;
    case 9:
        exe09();
        break;


}

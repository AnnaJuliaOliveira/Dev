// Métodos de manipulação e Verificação

let frase = '  Espaços em branco  ';
//removendo espaços em branco 
let textolimpo =  frase.trim();
console.log(textolimpo);
 
let comecaCom = frase.startsWith('Espaços');
console.log(comecaCom);
let terminaCom = frase.endsWith('branco');
console.log(terminaCom);
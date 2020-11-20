const escola = 'Cod3r'; //primeira letra indice 0

console.log(escola.charAt(4)); //letra que está no indice 4 = r   
console.log(escola.charAt(5)); //vazio

console.log(escola.charCodeAt(3));   //dentro da tabela unicode

console.log(escola.indexOf('3'));  //saber qual o indice que a letra está 

console.log(escola.substring(1));  //vai do indice 1 até o final (od3r)
console.log(escola.substring(0, 3)); // do indice 0 até o 3 sem inclui-lo (Cod)

console.log('Escola '.concat(escola).concat('!')); // Escola Cod3r! 
console.log('Escola ' + escola + '!');

console.log(escola.replace(3, 'e'));   //substitui o 3 po e = Coder

console.log(escola.replace(/\d/, 'e'));  //expressão regular = substitui todos os numeros
console.log(escola.replace(/\w/g, 'e')); //expressão regular = substitui todos os numeros

console.log('Ana,Maria,Pedro'.split(','));     //array
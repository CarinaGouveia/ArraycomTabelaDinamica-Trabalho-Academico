

var ID = [];
var descricao = [];
var valor = [];
var quantidade = [];
var total = [];
 
function adicionar(){
var recebe =  document.getElementById('resultado').value;
ID.push(recebe);
console.log(ID);

var recebe1 =  document.getElementById('resultado1').value;
descricao.push(recebe1);
console.log(descricao);

var recebe2 =  document.getElementById('resultado2').value;
valor.push(recebe2);
console.log(valor);

var recebe3 =  document.getElementById('resultado3').value;
quantidade.push(recebe3);
console.log(quantidade);

var recebe4 =  parseFloat( recebe2) * parseFloat( recebe3);
total.push(recebe4);
document.getElementById('resultado4').value = recebe4.toFixed(2); 
console.log(total);
}

function remover(){
ID.pop();
document.getElementById('resultado').value = 'removendo ultimo nome adicionado ' ;
console.log(ID);

descricao.pop();
document.getElementById('resultado1').value = 'removendo ultimo nome adicionado ' ;
console.log(descricao);
 
valor.pop();
document.getElementById('resultado2').value = 'removendo ultimo nome adicionado ' ;
console.log(valor);

quantidade.pop();
document.getElementById('resultado3').value = 'removendo ultimo nome adicionado ' ;
console.log(quantidade);

document.getElementById('resultado4').value = ' ';
}

function listar(){
var modoexibir =  '<ul>'
for( var  i = 0 ; i < ID.length ; i++)
{
console.log('elemento o array', i);
modoexibir += '<li>'+ 'id:'+ ID[i]+',' + ' descrição:'+ descricao[i]+',' + ' valor:'+ valor[i]+',' + ' quant:'+ quantidade[i] + '</li>';
}
modoexibir += '</ul>';  
console.log( modoexibir);
document.getElementById('idlistar').innerHTML =  modoexibir ;
}

function Limpa() {
resultado.value = ' ';
resultado1.value = ' ';
resultado2.value = ' ';
resultado3.value = ' ';
resultado4.value = ' ';
}

function reset(){
 document.getElementById('idlistar').innerHTML = ' ' ;
}
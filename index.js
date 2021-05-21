

// preciso de uma lista GLOBAL
// criar um array para ser essa lista GLOBAL
var listaProdutos
 = [];

function add() {
	// receber um produtos vindo do formulário HTML (campos INPUTS)

	// variaveis locais
	var id = document.getElementById('inputId').value;
	var descricao = document.getElementById('inputDescricao').value;
	var quantidade = document.getElementById('inputQuantidade').value;
	var valor = document.getElementById('inputValor').value;
    var subtotal = parseFloat(quantidade * valor).toFixed(2);
	
	// criar um array LOCAL
	var produtos = [];

	produtos.push(id);
	produtos.push(descricao);
	produtos.push(quantidade);
	produtos.push(valor);
	produtos.push(subtotal)

	// depois de inserido os dados no array produtos
	// eu vou inserir o produtos dentro da LISTAProdutos

	listaProdutos
	.push(produtos);

	console.log(listaProdutos
		);
	list();
}

function remove() {
	listaProdutos
	.pop();
	list();
}

function limpar() {
	listaProdutos
	 = [];
	list();
}

function list() {
	var total= 0;
	var listarProd = '<table class="table"> ';
    listarProd += '<thead><tr><th>ID</th><th>Descrição</th><th>Quant</th><th>Valor</th><th>Subtotal</th></tr></thead>';

	for (var row = 0; row < listaProdutos.length; row++) {
		console.log('ROW' + row + ': ' + listaProdutos[row]);
		total = (parseFloat(total)+parseFloat(listaProdutos[row][4])).toFixed(2);
		var celula = '';

		for (var col = 0; col < listaProdutos[row].length; col++) {
			celula += ' <td>' + listaProdutos[row][col] + '</td>';
		}

		listarProd += '<tr>' + celula +'</tr>'  ;
	
   	}
	   
listarProd += '<tr><td></td><td></td><td></td><td>TOTAL</td><td>'+ total + '</td></tr>'
listarProd += '</table>';

document.getElementById('listar').innerHTML =listarProd;
}



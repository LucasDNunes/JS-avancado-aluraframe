class NegociacaoController {
		
	constructor(){

		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');

	}


	adiciona(event){

		event.preventDefault();

		//typeof - mostrando o tipo do dado
		//console.log(typeof(this._inputData.value));

		//transformando em array para reconhecer no new Date()
		//console.log(this._inputData.value.split('-'));  //  - quebrando as string apartir do '-'
		//console.log(this._inputData.value.replace(/-/g,','));   - trocando os '-' para ','
		// ... usando 'spread operator' para desmebrar o array
		//.map() passando parametro o item do array e o indice do array, para diminuir o mes e mostrar a data certa

		// usando arrow functions do ES6
		let data = new Date(...this._inputData.value
									.split('-')
									.map((item, indice) => item - indice % 2)
									//nao precisa abrir {} apos => e da return pq só tem um linha de cod
									//usando o % para pegar a posição do mês que é na posição 1

		);

		let negociacao = new Negociacao(
			data,
			this._inputQuantidade.value,
			this._inputValor.value
		);

		console.log(negociacao);

	}

}
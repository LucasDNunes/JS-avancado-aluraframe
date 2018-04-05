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
		//console.log(this._inputData.value.split('-'));    - quebrando as string apartir do '-'
		//console.log(this._inputData.value.replace(/-/g,','));   - trocando os '-' para ','
		let data = new Date(this._inputData.value.split('-'));

		//arrumar data

		let negociacao = new Negociacao(
			//this._inputData.value.split('-'),
			//this._inputData.value.replace(/-/g,','),
			data,
			this._inputQuantidade.value,
			this._inputValor.value
		);

		console.log(negociacao);
	}

}
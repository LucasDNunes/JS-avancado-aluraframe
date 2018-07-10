class Mensagem {
	constructor(texto=''){ // passando um valor padrao caso nao passe valr quando instancia a classe

		this._texto = texto;
	}

	get texto() {
		return this._texto;
	}

	set texto(texto){
		this._texto = texto;
	}
}
class Negociacao {
	constructor(data, quantidade, valor) {
		
		this._data = new Date(data.getTime()); // usando o new date para que nao possa ocorrer alteração
		this._quantidade = quantidade;
		this._valor = valor;

		Object.freeze(this); // congelando objeto para nao poder ser alterado
	}
	//antes era getVolume
	get volume(){ //criando atributos get nao sendo necessarios chamar getVolume() e sim apenas volume
		return this._quantidade * this._valor; // o que tem _ nao é para acessar diretamente e sim por metodos
	}

	get data(){
		return this._data;
	}

	get quantidade(){
		return this._quantidade;
	}

	get valor(){
		return this._valor;
	}

}	// methods

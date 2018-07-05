class MensagemView {

	constructor(elemento){
		this._elemento = elemento;
	}

	_template(model){
		return model.texto ? `<p class="alert alert-info"> ${model.texto} </p>` : '<p></p>';
		//if ternario, em js se a string é vazia é false.
	}

	update(model){
		this._elemento.innerHTML = this._template(model); 
	}
}
class MensagemView extends View {

	constructor(elemento){
		super(elemento);
	}

	_template(model){
		return model.texto ? `<p class="alert alert-info"> ${model.texto} </p>` : '<p></p>';
		//if ternario, em js se a string é vazia é false.
	}
}
class DateHelper {

	constructor() {
		throw new Error('DateHelper não pode ser instanciada');
	}

	static dataParaTexto(data) { // metodos staticos, pertencem a definição da classe nao rpecisando cirar uma instancia
		return ` ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} ` // usando template string es6
	}

	static textoParaData(texto) {
		//transformando em array para reconhecer no new Date()
		//console.log(this._inputData.value.split('-'));  //  - quebrando as string apartir do '-'
		//console.log(this._inputData.value.replace(/-/g,','));   - trocando os '-' para ','
		// ... usando 'spread operator' para desmebrar o array
		//.map() passando parametro o item do array e o indice do array, para diminuir o mes e mostrar a data certa

		//criando expressão regular e testando o texto se nao está no formato certo
		if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) throw new Error('Deve estar no formato aaaa-mm-dd');

		// usando arrow functions do ES6
		return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

		//nao precisa abrir {} apos => e da return pq só tem um linha de cod
		//usando o % para pegar a posição do mês que é na posição 1
	}

}
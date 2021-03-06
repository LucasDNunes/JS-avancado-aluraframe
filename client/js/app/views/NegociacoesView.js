class NegociacoesView extends View {

    constructor(elemento){
        super(elemento);
    }

    template(model){''
        return`
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${
                    model.negociacoes.map((n) => { // n = cada negociaçao que esta farrendo
                        
                        return `
                            <tr>
                                <td>${DateHelper.dataParaTexto(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>

                            </tr>
                        `;
                    }).join('') // usando o metodo join para junção de string, transformando  esse array em uma string só
                }
            </tbody>
            
            <tfoot>
                <td colspan="3"> </td>
                <td>
                    ${
                        // (function () { //usando IIFE
                        //     let total = 0;
                        //     model.negociacoes.forEach(n => total += n.volume);
                        //     return total;
                        // })() // () = para chamar a função anterior  // "gambiarra" sem paradigma funcional

                        model.negociacoes.reduce((total, n ) => {
                            return total + n.volume;
                        },0.0)
                    }
                </td>
            </tfoot>
        </table> `;
    }

}   
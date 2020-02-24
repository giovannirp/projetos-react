import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Livro</th>
                <th>Preco</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const linhas = props.lista.map((linha) => {
        return (
            <tr key={linha.id}>
                <td>{linha.nome}</td>
                <td>{linha.curso}</td>
                <td>{linha.preco}</td>
                <td><button onClick={() => { props.removerListagem(linha.id) }} className="waves-effect red darken-1 btn"><i class="material-icons left">delete</i>Remover</button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {
    render() {
        const { lista, removerListagem } = this.props;
        return (
            <div className="DivHeigh">
                <table>
                    <TableHead />
                    <TableBody lista={lista} removerListagem={removerListagem} />
                </table>
            </div>
        );
    }

}
export default Tabela;
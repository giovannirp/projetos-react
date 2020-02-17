import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autor</th>
                <th>Livro</th>
                <th>Preco</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    console.log(props);
    const linhas = props.lista.map((linha) => {
        return (
            <tr key={linha.id}>
                <td>{linha.nome}</td>
                <td>{linha.curso}</td>
                <td>{linha.preco}</td>
                <td><button>Remover</button></td>
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
        const { lista } = this.props;

        return (
            <table>
                <TableHead />
                <TableBody lista={lista} />
            </table>
        );
    }

}
export default Tabela;
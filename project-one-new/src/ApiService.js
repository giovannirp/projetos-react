const ApiService = {
    ListagemGeral: () => {
        return fetch('http://localhost:3000/listagem')
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json());
    },
    CriaListagem: listagem => {
        return fetch('http://localhost:3000/listagem', { method: 'POST', headers: { 'content-type': 'aplication/json' }, body: listagem })
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json());
    },
    RemoveListagem: id => {
        return fetch(`http://localhost:3000/listagem/${id}`, { method: 'DELETE', Headers: { 'content-type': 'aplication/json' } })
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json());
    },
    SobreListagem: () => {
        return fetch('http://localhost:3000/sobre')
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json());
    },
    CursoListagem: () => {
        return fetch('http://localhost:3000/cursos')
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json())
    },
    TrataErros: res => {
        if (!res.ok) {
            throw Error(res.responseText);
        }
        return res;
    }
}
export default ApiService;
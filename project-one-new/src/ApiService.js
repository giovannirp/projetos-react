const ApiService = {
    ListagemGeral: () => {
        return fetch('http://localhost:3000/listagem')
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
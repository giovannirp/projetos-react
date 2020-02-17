const ApiService = {
    ListagemGeral: () => {
        return fetch('http://localhost:8000/api/autor/')
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json())
    },
    TrataErros: res => {
        if (!res.ok) {
            throw Error(res.responseText)
        }
        return res;
    }
}
export default ApiService;
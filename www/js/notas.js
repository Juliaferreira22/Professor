var btnnotas = document.getElementById('btnNotas');

function criarLista(notas){
    const lista = document.createElement('ul');
    for (const nota of notas) {
        const item = document.createElement('li');
        item.innerText = nota.nome;   
        lista.appendChild(item);                                     
    }
    main.appendChild(lista);
}

function gerarLista(url){
    fetch(url)
    .then((resposta)=> {
        return resposta.json();
    })
    .then((json)=>{
        criarLista(json);
    })
}

function enviar(nota, url, method, json){
    fetch(url, {
        method: method,
        body: JSON.stringify(json),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(()=> {
        gerarTabela('https://62862e40f0e8f0bb7c11d2e1.mockapi.io/api/endepoint/Notas');
    });
}

btnImagem.onclick = ()=>{
    main.innerHTML = '';
    carregarImagem('imgs/carne1.jpg');
}

btnArquivo.onclick = ()=>{     
    main.innerHTML = '';      
    gerarLista('data/arquivo.json');
}

btnAPI.onclick = ()=>{     
    main.innerHTML = '';      
    gerarLista('http://localhost:3000/produtos');
}

btnNotas.onclick = ()=>{
    main.innerHTML = '';
    gerarTabela('http://localhost:3000/notas');
}

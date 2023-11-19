document.getElementById('submitButton').addEventListener('click', createProduto);
function createProduto() {
    const nomeProduto = document.getElementById('nomeprod').value;
    const precoProd = document.getElementById('precoprod').value;
    const quantidade = document.getElementById('quantidadeprod').value;

    if (!nomeProduto && !precoProd && !quantidade) {
        alert("Por favor, insira um nome, um preco e uma quantidade para produto!");
        return;
    } else if (!nomeProduto && !precoProd) {
        alert("Por favor, insira um nome e um preco para produto!");
        return;
    } else if (!nomeProduto) {
        alert("Por favor, insira um nome para produto!");
        return;
    } else if (!precoProd && !quantidade) {
        alert("Por favor, insira um preco e uma quantidade para produto!");
        return;
    } else if (!precoProd) {
        alert("Por favor, insira um preco!");
        return;
    } else if (!quantidade) {
        alert("Por favor, insira uma quantidade para produto!");
        return;
    }

    const produto = {
        nome: nomeProduto,
        preco: precoProd,
        quantidade: quantidade
    };

    fetch('/backend/produtos.php', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Não autorizado');
            } else {
                throw new Error('Sem rede ou não conseguiu localizar o recurso');
            }
        }
        return response.json();
    })
    .then(data => {
        if(!data.status){
            alert('Produto ja existe');
        }else{
            alert("Produto criado");
        } 
    })
    .catch(error => alert('Erro na requisição: ' + error));
}

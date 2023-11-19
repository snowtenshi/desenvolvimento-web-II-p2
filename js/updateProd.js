function updateProd() {
    const prodId = document.getElementById("getProdId").value;
    const prodNome = document.getElementById("nomeprod").value;
    const prodPreco = document.getElementById("inputPreco").value;
    const prodQuantidade = document.getElementById("inputQuantidade").value;
    const produtoAtualizado = {
        nome: prodNome,
        preco: prodPreco,
        quantidade: prodQuantidade
    };

    fetch('/backend/produtos.php?id=' + prodId, { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produtoAtualizado)
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
        console.log(data)
        if(!data.status){
            alert("Nao pode atualizar o produto");
        }else{
            alert("Produto atualizado com sucesso");
        } 
        
    })
    .catch(error => alert('Erro na requisicao: ' + error));
}

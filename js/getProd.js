function getProd() {
    const prodId = document.getElementById("getProdId").value;
    fetch('/backend/produtos.php?id=' + prodId, {
        method: 'GET'
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Nao autorizado');
            } else {
                throw new Error('Sem rede ou nao conseguiu localizar o recurso');
            }
        }
        return response.json();
    })
    
    .then(data => {
        if(!data.status){
            alert('Produto nao encontrado')
            document.getElementById("nomeprod").value = ''; 
        }else {
            document.getElementById("nomeprod").value = data.produto.nome; 
        }    
    })
    .catch(error => alert('Erro na requisicao: ' + error));
}
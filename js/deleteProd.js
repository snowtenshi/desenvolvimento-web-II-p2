function deleteProd() {
    const prodId = document.getElementById("getProdId").value;
    fetch('/backend/produtos.php?id=' + prodId, {
        method: 'DELETE'
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
            alert("Nao pode deletar o produto");
        }else{
            alert("Produto deletado");
            document.getElementById("nomeprod").value = ''; 
        } 
        
    })
    .catch(error => alert('Erro na requisicao: ' + error));
}
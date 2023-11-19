function deleteUser() {
    const userId = document.getElementById("getUserId").value;
    fetch('/backend/usuarios.php?id=' + userId, {
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
            alert("Nao pode deletar usuario");
        }else{
            alert("Usuario deletado");
            document.getElementById("inpuNome").value = ''; 
        } 
        
    })
    .catch(error => alert('Erro na requisicao: ' + error));
}
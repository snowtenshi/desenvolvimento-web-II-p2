function getUser() {
    const userId = document.getElementById("getUserId").value;
    fetch('/backend/usuarios.php?id=' + userId, {
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
            alert('Usuario nao encontrado')
            document.getElementById("inpuNome").value = ''; 
        }else{
            document.getElementById("inpuNome").value = data.usuario.nome; 
            document.getElementById("inputEmail").value = data.usuario.email; 
        } 
       
    })
    .catch(error => alert('Erro na requisicao: ' + error));
}
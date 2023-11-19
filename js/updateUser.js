function updateUser() {
    const userId = document.getElementById("getUserId").value;
    const userName = document.getElementById("inpuNome").value;
    const userEmail = document.getElementById("inputEmail").value;

    const usuarioAtualizado = {
        nome: userName,
        email: userEmail,
    };

    fetch('/backend/usuarios.php?id=' + userId, { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuarioAtualizado)
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
            alert("Nao pode atualizar o usuario");
        }else{
            alert("Usuario atualizado com sucesso");
        } 
        
    })
    .catch(error => alert('Erro na requisicao: ' + error));
}
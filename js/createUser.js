document.getElementById('submitButton').addEventListener('click', createUser);
function createUser() {
    const nomeUsuario = document.getElementById('nome').value;
    const emailUsuario = document.getElementById('email').value;
    const senhaUsuario = document.getElementById('senha').value;
    const nascido = document.getElementById('nascido').value;
    const cepUsuario = document.getElementById('cep').value
    const ruaUsuario = document.getElementById('rua').value
    const bairroUsuario = document.getElementById('bairro').value
    const cidadeUsuario = document.getElementById('cidade').value
    const ufUsuario = document.getElementById('uf').value

    if (!nomeUsuario && !emailUsuario && !senhaUsuario) {
        alert("Por favor, insira um nome, um email e uma senha para usuario!");
        return;
    } else if (!nomeUsuario && !emailUsuario) {
        alert("Por favor, insira um nome e um email para usuario!");
        return;
    } else if (!nomeUsuario) {
        alert("Por favor, insira um nome para usuario!");
        return;
    } else if (!emailUsuario && !senhaUsuario) {
        alert("Por favor, insira um email e senha para usuario!");
        return;
    } else if (!emailUsuario) {
        alert("Por favor, insira um email para usuario!");
        return;
    } else if (!senhaUsuario) {
        alert("Por favor, insira uma senha para usuario!");
        return;
    } else if (!nascido) {
        alert("Por favor, digite uma data de nascimento para o usuario!")
        return;
    } else if (!ruaUsuario || !bairroUsuario || !cidadeUsuario || !ufUsuario || !cepUsuario) {
        alert("Por favor, insira os dados de endereço para o usuario")
        return;
    }

    const usuario = {
        nome: nomeUsuario,
        email: emailUsuario,
        senha: senhaUsuario,
        datanascimento: nascido,
        cep: cepUsuario,
        rua: ruaUsuario,
        bairro: bairroUsuario,
        cidade: cidadeUsuario,
        uf: ufUsuario 
    };

    fetch('/backend/usuarios.php', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
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
            alert('Usuario ja existe');
        }else{
            alert("Usuario criado");
        } 
    })
    .catch(error => alert('Erro na requisicao: ' + error));

}

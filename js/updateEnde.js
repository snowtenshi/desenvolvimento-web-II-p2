function updateEnde() {
  const userId = document.getElementById('getUserId').value;
  const cepUsuario = document.getElementById('cep').value;
  const ruaUsuario = document.getElementById('endereco').value;
  const bairroUsuario = document.getElementById('bairro').value;
  const cidadeUsuario = document.getElementById('cidade').value;
  const ufUsuario = document.getElementById('uf').value;

  const enderecoAtualizado = {
      cep: cepUsuario,
      rua: ruaUsuario,
      bairro: bairroUsuario,
      cidade: cidadeUsuario,
      uf: ufUsuario,
  };

  fetch('/backend/endereco.php?id=' + userId, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(enderecoAtualizado),
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
      if (!data.status) {
          alert("Nao foi possivel atualizar o endereco do usuario");
      } else {
          alert("Endereco do usuario atualizado com sucesso");
      }
  })
  .catch(error => alert('Erro na requisicao: ' + error));
}
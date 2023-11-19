const token = localStorage.getItem('token');
if (!token) {
  redirecioneLogin();
}

async function validaToken() {
  try {
    console.log("Validando token...");
    console.log("Token:", token);

    const response = await fetch('/backend/login.php', {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    });

/*     const jsonResponse = await response.json();
    console.log("Resposta do servidor:", jsonResponse);
    if (!jsonResponse.status) {
      redirecioneLogin();
    }

    const telasPermitidas = jsonResponse.tela.map(tela => tela.nome);
    const nomePaginaAtual = window.location.pathname.split('/').pop().replace('.html', '');

    if (!telasPermitidas.includes(nomePaginaAtual)) {
      if (telasPermitidas.length > 0) {  
          window.location.href = telasPermitidas[0] + '.html';  
      } else {
          window.location.href = 'login.html';  
      }
    } */

  } catch (error) {
    console.error("Erro ao validar token:", error);
    redirecioneLogin();
  }
}

function redirecioneLogin() {
  window.location.href = "login.html";
}

validaToken(); 
setInterval(validaToken, 60000); 
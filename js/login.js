document.getElementById('loginSubmit').addEventListener('click', function () {
  const token = localStorage.getItem('token');
  const loginEmail = document.getElementById('emailInput').value;
  const loginPassword = document.getElementById('passwordInput').value;

  //console.log(`Email: ${loginEmail} Senha: ${loginPassword}`);
  if (!loginEmail && !loginPassword) {
      alert("Por favor, insira um email e uma senha!");
      return;
  } else if (!loginEmail) {
      alert("Por favor, insira um email!");
      return;
  } else if (!loginPassword) {
      alert("Por favor, insira uma senha!");
      return;
  }
  // Função tirada de https://www.w3resource.com/javascript/form/email-validation.php
  function validateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          return true;
      }  else {
          return false;
      }
  }
  
  if (validateEmail(loginEmail) === false) {
      alert("Por favor, insira um email valido!");
      return;
  }
  
  const loginBody = {
      email: loginEmail,
      senha: loginPassword,
  };
  
  fetch('/backend/login.php', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token, 
      },
      body: JSON.stringify(loginBody)
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
      if (data.token){
        localStorage.setItem('token', data.token)
        alert('Login efetuado com sucesso!');
        window.location.href = '../index.html';
      } else {
        alert("Login deu ruim meu condecorado!");
      } 
      
  })
  .catch(error => alert('Erro na requisicao: ' + error));
});

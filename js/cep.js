function limpa_formulario_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
    }

function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulario_cep();
            alert("CEP nao encontrado.");
        }
    }
        
function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('uf').value="...";

                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                  };
                  
                  fetch("https://viacep.com.br/ws/"+ cep + "/json/")
                    .then(response => response.json())
                    .then(valor => meu_callback(valor))
                    .catch(error => alert('Erro na requisicao: ' + error));

                    

            } 
            else {
                //cep invalido.
                limpa_formulario_cep();
                alert("Formato de CEP invalido.");
            }
        }
        else {
            //cep sem valor, limpa formulario.
            limpa_formulario_cep();
    }
};
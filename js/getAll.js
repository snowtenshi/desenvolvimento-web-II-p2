function getAll() {
    fetch('/backend/usuarios.php', {
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
        displayUsers(data);
    })
    .catch(error => alert('Erro na requisicao: ' + error));
}

function displayUsers(data) {
    console.log(data);
    const users = data.usuarios;  
    const usersTable = document.getElementById('usersTable');
    usersTable.innerHTML = ''; 


    const table = document.createElement('table');
    table.classList.add('user-table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['ID', 'Nome', 'Email', 'Data de Nascimento'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    users.forEach(user => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
        const cell4 = document.createElement('td');

        cell1.textContent = user.id;
        cell2.textContent = user.nome;
        cell3.textContent = user.email;
        cell4.textContent = user.datanascimento;


        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);


        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    usersTable.appendChild(table);
}

getAll();
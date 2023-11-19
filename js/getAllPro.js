function getAll() {
    fetch('/backend/produtos.php', {
        method: 'GET'
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
        displayUsers(data);
    })
    .catch(error => alert('Erro na requisição: ' + error));
}


function displayUsers(data) {
    const prod = data.produtos;  
    const prodTable = document.getElementById('prodTable');
    prodTable.innerHTML = ''; 

    const table = document.createElement('table');
    table.classList.add('prod-table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['ID', 'Produto', 'Preco', 'Quantidade'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    prod.forEach(prod => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
        const cell4 = document.createElement('td');

        cell1.textContent = prod.id;
        cell2.textContent = prod.nome;
        cell3.textContent = prod.preco;
        cell4.textContent = prod.quantidade;

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    prodTable.appendChild(table);
}

getAll();
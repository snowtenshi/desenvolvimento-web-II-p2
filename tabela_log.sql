CREATE TABLE log_users (
  id_log INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  senha text,
  data_nascimento DATE,
  data_delecao datetime DEFAULT CURRENT_TIMESTAMP,
  iduser INT,
	FOREIGN KEY(iduser) 
	REFERENCES users(id)
);

CREATE TABLE log_produto (
  id_log INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  preco INT NOT NULL,
  quantidade INT,
  data_delecao datetime DEFAULT CURRENT_TIMESTAMP,
  idprod INT,
	FOREIGN KEY (idprod)
    REFERENCES produtos (id)
);
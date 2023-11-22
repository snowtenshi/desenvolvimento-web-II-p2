CREATE TABLE log_users (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	senha text,
	datanascimento DATE,
	data_delecao DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE log_produto (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  preco INT NOT NULL,
  quantidade INT,
  data_delecao datetime DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //
CREATE DEFINER=`root`@`localhost` TRIGGER `enviar_log` AFTER DELETE ON `users` FOR EACH ROW BEGIN
    INSERT INTO log_users (nome, email, senha, datanascimento, data_delecao)
    VALUES (OLD.nome, OLD.email, OLD.senha, OLD.datanascimento, NOW());
END
//
DELIMITER ;

DELIMITER //
CREATE DEFINER=`root`@`localhost` TRIGGER `enviar_log_produto` AFTER DELETE ON `produtos` FOR EACH ROW BEGIN
    INSERT INTO log_produto (nome, preco, quantidade, data_delecao)
    VALUES (OLD.nome, OLD.preco, OLD.quantidade, NOW());
END
//
DELIMITER ;
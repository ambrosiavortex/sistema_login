CREATE DATABASE cadastro;

USE cadastro;

CREATE TABLE cadastros(
	id				INT PRIMARY KEY AUTO_INCREMENT,
    username		VARCHAR(10),
    email			VARCHAR(50),
    senha			VARCHAR(50),
    dt_registro		DATETIME
);
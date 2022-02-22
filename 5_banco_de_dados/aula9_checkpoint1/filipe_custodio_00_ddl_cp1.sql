-- =================================================
-- Trabalho Referente CheckPoint I - Banco de Dados
-- =================================================
-- Aluno: Filipe Custódio Torres
-- =================================================
-- Projeto: Sistema Imobiliario de Vendas
-- =================================================

CREATE DATABASE SISTEMA_IMOBILIARIA;
USE SISTEMA_IMOBILIARIA;

-- =================================================
-- Criar Entidades: Clientes, Contatos, Contratos, Imoveis

CREATE TABLE CLIENTES(
	ID_CLIENTE INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    NOME_CLIENTE VARCHAR(100) NOT NULL,
    SOBRENOME_CLIENTE VARCHAR(100) NOT NULL,
    RG VARCHAR(30) NOT NULL,
    CPF VARCHAR(30) NOT NULL,
    DATA_CADASTRO DATETIME
);

CREATE TABLE CONTATOS(
	ID_CONTATO INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    TIPO_CONTATO VARCHAR(30) NOT NULL,
    CONTATO VARCHAR(100) NOT NULL,
    ID_CLIENTE INT NOT NULL,
    CONSTRAINT FK_CONTATOS_CLIENTES FOREIGN KEY(ID_CLIENTE) REFERENCES CLIENTES(ID_CLIENTE)
);

CREATE TABLE IMOVEIS(
	ID_IMOVEL INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    ENDERECO VARCHAR(150) NOT NULL,
    CIDADE VARCHAR(50),
    UF CHAR(2) NOT NULL,
    CEP VARCHAR(10) NOT NULL,
    ID_CLIENTE INT NOT NULL,
	CONSTRAINT FK_IMOVEIS_CLIENTES FOREIGN KEY(ID_CLIENTE) REFERENCES CLIENTES(ID_CLIENTE)
);

CREATE TABLE CONTRATOS(
	ID_CONTRATO INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    VALOR DECIMAL(11,2) NOT NULL,
    DATA_CONTRATO DATETIME NOT NULL,
    DATA_PREVISAO_PAGAMENTO DATETIME NOT NULL,
    DATA_PAGAMENTO DATETIME NOT NULL,
    ID_PROPRIETARIO INT NOT NULL,
    ID_CLIENTE INT NOT NULL,    
    ID_IMOVEL INT NOT NULL,
    CONSTRAINT FK_CONTRATOS_CLIENTES_PROPRIETARIO FOREIGN KEY(ID_PROPRIETARIO) REFERENCES CLIENTES(ID_CLIENTE),
    CONSTRAINT FK_CONTRATOS_CLIENTES_CLIENTE FOREIGN KEY(ID_CLIENTE) REFERENCES CLIENTES(ID_CLIENTE),
    CONSTRAINT FK_CONTRATOS_IMOVEIS FOREIGN KEY (ID_IMOVEL) REFERENCES IMOVEIS(ID_IMOVEL)
);
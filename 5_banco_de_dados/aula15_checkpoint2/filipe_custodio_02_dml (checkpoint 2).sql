-- =================================================
-- Trabalho Referente CheckPoint II - Banco de Dados
-- =================================================
-- Aluno: Filipe Custódio Torres
-- =================================================
-- Projeto: Sistema Imobiliario de Vendas
-- Objetivo: Armazenar histórico de vendas realizadas, através do registro do cliente vs imóvel comprado/vendido.
-- Regras: Toda venda deve ter um contrato. Todo contrato deve ter um imóvel. Todo imóvel deve estar associado a um cliente. Vendedores e Comprados são clientes. Todos clientes possuem um contato.
-- =================================================

/* O arquivo de script da resposta deve conter:
	1- Criação do banco de dados.    -> Arquivo Checkpoint I
	2- Criação das tabelas com chaves primárias e estrangeiras. -> Arquivo Checkpoint I
	3- Inserção de dados em uma das tabelas. -> Arquivo Atual
	4- Atualização de dados em uma das tabelas. -> Arquivo Atual
	5- Exclusão de dados em uma das tabelas. -> Arquivo Atual
	6- Seleção de dados de uma das tabelas. -> Arquivo Atual */

USE SISTEMA_IMOBILIARIA;

-- 3) Inserção de dados em uma das tabelas.
INSERT INTO CLIENTES()
VALUES 
(default,'Filipe','Custodio','99.999.999-99','111.111.111/11',default),
(default,'João','Ramos','88.888.888-88','222.222.222/22',default),
(default,'Ismael','Soares','77.777.777-77','333.333.333/33',default),
(default,'Pedro','Alves','66.666.666-66','444.444.444/44',default),
(default,'Matheus','Carvalho','55.555.555-55','555.555.555/55',default);
-- SELECT * FROM CLIENTES;

-- 4) Atualização de dados em uma das tabelas.
UPDATE CLIENTES SET DATA_CADASTRO = '2021-10-19 08:10:20' WHERE ID_CLIENTE = 1;	
UPDATE CLIENTES SET DATA_CADASTRO = '2021-10-20 03:23:10.000' WHERE ID_CLIENTE = 4;	
-- SELECT * FROM CLIENTES;

-- 5- Exclusão de dados em uma das tabelas.
DELETE FROM CLIENTES WHERE ID_CLIENTE = 2;
-- SELECT * FROM CLIENTES;

-- 6) Seleção de dados de uma das tabelas.
SELECT 
ID_CLIENTE AS ID
, NOME_CLIENTE AS NOME
, SOBRENOME_CLIENTE AS SOBRENOME
, DATA_CADASTRO AS CADASTRO 
FROM CLIENTES 
WHERE 
DATE_FORMAT(DATA_CADASTRO, '%Y/%m/%d') BETWEEN date '2021-10-01' AND '2021-10-30';

-- 
SELECT * FROM CLIENTES;
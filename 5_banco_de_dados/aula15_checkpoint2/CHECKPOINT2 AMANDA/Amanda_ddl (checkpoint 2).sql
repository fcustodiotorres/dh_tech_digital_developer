-- =================================================
-- Trabalho Referente CheckPoint 2 - Banco de Dados
-- =================================================
-- Aluno: Amanda Gabriela Custodio
-- =================================================
-- Projeto: Esse projeto é sobre Sistema Imobiliario de Vendas, onde consigo localizar os cadastros dos clientes com facilidade.
-- =================================================

Use SISTEMA_IMOBILIARIA;

-- Inserção de dados em uma das tabelas.


INSERT INTO CLIENTES (ID_CLIENTE, NOME_CLIENTE, SOBRENOME_CLIENTE, RG, CPF, DATA_CADASTRO)
VALUES
(default,'AMANDA','CUSTODIO','32.578.876;-3','489.355.473-98',default),
(default, 'Juliana', 'Torres','05.953.267-2', '472.888.246-99', default),
(default, 'Gabriela', 'Cedro', '35.754.098-1', '436.858.327-41', default),
(default, 'Ana Luiza', 'Barbosa', '21.654.987-3', '58.123.746-97', default);

SELECT * FROM CLIENTES;


-- Atualização de dados em uma das tabelas.


UPDATE CLIENTES
SET NOME_CLIENTE = 'Amanda', SOBRENOME_CLIENTE = 'Custodio', RG = '32.578.876-3'
WHERE ID_CLIENTE = 1;

SELECT * FROM CLIENTES
WHERE ID_CLIENTE = 1;


-- Exclusão de dados em uma das tabelas.

DELETE FROM CLIENTES C 
WHERE C.ID_CLIENTE = (
	SELECT * FROM ( -- sub select
    SELECT ID_CLIENTE FROM CLIENTES C2
	WHERE C2.NOME_CLIENTE = 'ANA LUIZA') AS b);
    
    
    
    -- Seleção de dados de uma das tabelas.
    
    SELECT CONCAT ( NOME_CLIENTE, ' ',SOBRENOME_CLIENTE) AS NOME_SOBRENOME, CPF
    FROM CLIENTES;
    
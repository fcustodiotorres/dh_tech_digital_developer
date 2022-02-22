-- MESA DE TRABALHO - AULA 19 - PROCEDURES - 06/12/2021

-- =========================================
-- INTEGRANTES
-- 		DANIEL NASCIMENTO
-- 		FILIPE CUSTÓDIO
-- 		RAFAEL MIKE
-- =========================================

USE EMARKET;

-- =========================================
-- 1) EMPREGADOS
-- =========================================
/* 	Crie uma SP que liste os sobrenomes e nomes dos empregados, ordenados alfabeticamente.
	Invoque a SP para verificar o resultado.*/

DELIMITER $$
CREATE PROCEDURE SP_LISTA_EMPREGADOS () 
BEGIN
	SELECT 
    EMPREGADOID,
    NOME,
    SOBRENOME
    
    FROM EMPREGADOS
    ORDER BY 2,3;	
END $$

CALL SP_LISTA_EMPREGADOS();

-- =========================================
-- 2) Empregados por cidade
-- =========================================
/* 	Crie uma SP que leva o nome de uma cidade e lista os funcionários dessa cidade
	Invoque a SP para listar os empregados de Seattle. */

DELIMITER $$
CREATE PROCEDURE SP_FUNCIONARIOS_CIDADE(IN cidade VARCHAR(100))
BEGIN 
	SELECT cidade, 
    empregadoid,
    concat(nome, ' ',sobrenome) as NOME
    
    FROM EMPREGADOS E
    WHERE E.CIDADE = cidade
    order by 1;
END $$

-- =========================================
-- 3) Clientes por país
-- =========================================
/*Crie uma SP que recebe o nome de um país e retorne o número de clientes naquele país.
Invoque a SP para consultar a quantidade de clientes de Portugal.
*/
DELIMITER $$
CREATE PROCEDURE PAIS_CLIENTES(IN xPais varchar(100))
BEGIN
	SELECT 
    COUNT(*) AS QUANTIDADE
    FROM CLIENTES
    WHERE pais = xPais;
END $$
CALL PAIS_CLIENTES('Portugal');

-- =========================================
-- 4) Produtos sem estoque
-- =========================================
/*Crie uma SP que receba um número e liste os produtos cujo estoque está abaixo desse número. O resultado deve mostrar o nome do produto, o Estoque atual e o nome da categoria à qual o produto pertence.
Liste os produtos com menos de 10 unidades no estoque;
Liste os produtos sem estoque.
*/
DROP PROCEDURE ESTOQUE_BAIXO;
DELIMITER $$
CREATE PROCEDURE ESTOQUE_MENOR(IN xQtd INT)
BEGIN
	SELECT 
    P.produtoid,
    P.produtonome,
    P.unidadesestoque,
    P.categoriaid,
    C.CATEGORIANOME
    FROM PRODUTOS P
    LEFT JOIN CATEGORIAS C ON C.CATEGORIAID = P.CATEGORIAID
    WHERE P.UnidadesEstoque < xQtd;
END $$
CALL ESTOQUE_MENOR(10);
CALL ESTOQUE_MENOR(1);

-- =========================================
-- 5) Vendas com desconto
-- =========================================
/* Crie uma SP que receba uma porcentagem e lista os nomes dos produtos que foram vendidos com desconto igual ou superior ao valor indicado, indicando, também,  o nome do cliente a quem foi vendido.
Liste as informações dos produtos que foram vendidos com um desconto superior a 10%.
*/
DELIMITER $$
CREATE PROCEDURE DESCONTO_MAIOR_IGUAL(IN xPercentual INT)
BEGIN
	SELECT 
	DF.PRODUTOID,
	P.PRODUTONOME,
	F.CLIENTEID,
	C.EMPRESA,
	ROUND((DF.DESCONTO * 100),2) AS DESCONTO_PERCENTUAL
	FROM DETALHEFATURA DF
	LEFT JOIN PRODUTOS P ON P.PRODUTOID = DF.PRODUTOID
	LEFT JOIN FATURAS F ON F.FATURAID = DF.FATURAID
	LEFT JOIN CLIENTES C ON C.CLIENTEID = F.CLIENTEID
	WHERE ROUND((DF.DESCONTO * 100),2) >= xPercentual;
END $$
CALL DESCONTO_MAIOR_IGUAL(10);




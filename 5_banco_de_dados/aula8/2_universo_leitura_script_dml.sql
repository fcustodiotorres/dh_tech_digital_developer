-- GRUPO 2
-- Elissandro Maciel
-- Daniel Marques
-- Henrique Arantes
-- Filipe Custodio
-- Felipe Toniolo


INSERT INTO ASSOCIADOS (rg, nome, sobrenome, endereco, cidade, estado)
VALUES ('1234567','Elissandro','Maciel','Rua tal','Flores da Cunha','RS'),
('7654321','Daniel','Marques','Rua dois','Campina Grande','PB'),
('1237654','Henrique','Arantes','Rua tres','Belo Horizonte','MG'),
('1236547','Filipe','Custodio','Rua quatro','Santana do Parnaiba','SP'),
('1232365','Felipe','Toniolo','Rua cinco','Santa Maria','RS');

INSERT INTO TELEFONES (telefone_socio, codAssoc)
VALUES ('11987654321', 1),
('21789456123', 2),
('31654789321', 3),
('41123654789', 4),
('51654789131', 5);

INSERT INTO autores (sobrenome, nome)
VALUES ('Da Vinci','Leonardo');

INSERT INTO editoras(razao_social,telefone)
VALUES('Editora Padrao','11945321987'),
('Editora Real','987651982'),
('Mundo de Papel','1345728910');

INSERT INTO LIVROS (cod_ISBN, titulo, ano_criacao, cod_autor, ano_publicacao, cod_editora)
VALUES 
('9788595086357', 'O Senhor dos Anéis', 2021, 1, 2019, 01),
('9788573516531', 'Absolute Sandman - Volume 1', 2021, 1, 2018, 02),
('9788580445046', 'Elantris', 2021, 1, 2012, 03),
('9786555871708', 'Casa de terra e sangue', 2021, 1, 2020, 03),
('9789896825805', 'Watchmen', 2021, 1, 2016, 02);
        
INSERT INTO EXEMPLARES (cod_livro, sinistro)
VALUES (1, 0),
(2,1),
(1,0),
(1,1),
(3,0);

INSERT INTO EMPRESTIMOS (codAssoc, data_, prazo_devolucao, data_devolucao)
VALUES (1, '2021-10-15', '2021-10-17', '2021-10-20'),
(3, '2021-10-13', '2021-10-18', '2021-10-18'),
(5, '2021-11-12', '2021-11-18', '2021-11-18');

INSERT INTO EMPRESTIMO_EXEMPLARES (cod_emprestimo, cod_exemplar)
VALUES (1,2),
(2,1),
(3,3);

DELETE FROM ASSOCIADOS WHERE codId = 1;

DELETE FROM LIVROS WHERE cod = 1;

UPDATE ASSOCIADOS 
SET 
    endereco = 'Rua das Flores, 860'
WHERE
    codId = 3;

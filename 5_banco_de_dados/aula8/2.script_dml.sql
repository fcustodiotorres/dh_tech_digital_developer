USE universoleitura;

-- Etapa 1: Associados
INSERT INTO ASSOCIADOS (rg, nome, sobrenome, endereco, cidade, estado)
VALUES ('1234567','Elissandro','Maciel','Rua tal','Flores da Cunha','RS'),
('7654321','Daniel','Marques','Rua dois','Campina Grande','PB'),
('1237654','Henrique','Arantes','Rua tres','Belo Horizonte','MG'),
('1236547','Filipe','Custodio','Rua quatro','Santana do Parnaiba','SP'),
('1237654','Felipe','Toniolo','Rua cinco','Santa Maria','RS');

-- Etapa 2: Telefones
INSERT INTO TELEFONES (telefone_socio, codAssoc)
VALUES ('11987654321', 1),
 ('21789456123', 1),
 ('31654789321', 2),
 ('41123654789', 2),
 ('51654789131', 3),
 ('61213548649', 5),
 ('71456486416', 4),
 ('81146846846', 5);

-- Etapa 3: Autores
INSERT INTO autores (sobrenome, nome)
VALUES ('Da Vinci','Leonardo');

-- Etapa 4 Toniolo: EDITORAS
INSERT INTO editoras(razao_social,telefone)
VALUES('Editora Padrão','11945321987'),
('Editora Real','987651982'),
('Mundo de Papel','1345728910');

-- Etapa 5 Jefferson: LIVROS

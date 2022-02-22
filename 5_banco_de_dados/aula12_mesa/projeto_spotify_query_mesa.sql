USE PROJETO_SPOTIFY;

-- Liste as músicas que possuem a letra "z" no título.
SELECT * FROM CANCAO WHERE TITULO LIKE '%Z%';

-- Liste as músicas que têm a letra "a" como segundo caractere e a letra "s" como último caractere.
--    SELECT * FROM CANCAO WHERE LEFT(TITULO,2) LIKE '%A' AND TITULO LIKE '%S';
SELECT * FROM CANCAO WHERE TITULO LIKE '_A%' AND TITULO LIKE '%S'; 

-- Mostre a lista de reprodução que contém mais músicas, renomeando as colunas, colocando em maiúscula a primeira letra, os acentos correspondentes e adicionando os espaços entre as palavras.
SELECT 
idPlaylist as 'Id Playlist',
idusuario as 'Id Usuário',
titulo as 'Título',
qtdcancoes as 'Qtd Cancoes',
idestado as 'Id Estado',
Datacriacao as 'Data Criação',
Dataexclusao as 'Data Exclusão'
FROM playlist;

-- Em outro momento, obtenha uma lista com os 5 usuários mais jovens, a partir dos próximos 10 registros.
select * from usuario order by Data_nac desc LIMIT 5 OFFSET 10;

-- Liste as 5 músicas com mais reproduções, em ordem decrescente.
SELECT * FROM CANCAO ORDER BY QTDREPRODUCAO DESC LIMIT 5;

-- Gere um relatório de todos os álbuns em ordem alfabética.
SELECT * FROM ALBUM ORDER BY TITULO;

-- Liste todos os álbuns que não possuem imagem, organizados em ordem alfabética.
SELECT * FROM ALBUM WHERE IMAGEMCAPA IS NULL ORDER BY TITULO;

-- Insira um novo usuário com os seguintes dados (leve em consideração os relacionamentos):
-- nomeusuario: novousuariodespotify@gmail.com
-- Nome e sobrenome: Elmer Santos 
-- password: Elmer Santos 
-- Data de nacimiento: 15/11/1991
-- Sexo: Masculino
-- Código Postal: B4129ATF
-- País: Brasil

-- ========================================
-- Corrigir os tipos de dados para coincidir com tabela, ex: Masculino = M, id Pais Brasil = 9
-- Dropando a FK idUsuario em DadosPagoXUsuario para poder editar o autoincrement DE ID USUARIO em Usuario
ALTER TABLE DADOSPAGOXUSUARIO DROP FOREIGN KEY idUsuario; 
ALTER TABLE passwordxusuario DROP FOREIGN KEY passxUsuario;
ALTER TABLE PLAYLIST DROP FOREIGN KEY playlist_Usuario;
ALTER TABLE CADASTRO DROP FOREIGN KEY Usuario;

ALTER TABLE USUARIO MODIFY idUsuario INT AUTO_INCREMENT;

ALTER TABLE DADOSPAGOXUSUARIO ADD CONSTRAINT `idUsuario` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idUsuario`);
ALTER TABLE PASSWORDXUSUARIO ADD CONSTRAINT  `passxUsuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`);
ALTER TABLE playlist add CONSTRAINT `playlist_Usuario` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idUsuario`);
ALTER TABLE CADASTRO ADD CONSTRAINT `Usuario` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idUsuario`);

select * from pais where pais = 'Brasil';
select * from USUARIO ORDER BY IDUSUARIO DESC LIMIT 1;
INSERT INTO USUARIO(idusuario,nomeusuario, nomecompleto, senha, data_nac, sexo, cod, pais_idPais)
values(default, 'novousuariodespotify@gmail.com', 'Elmer Santos', 'Elmer Santos','1991-11-15','M','B4129ATF',9);
select * from USUARIO ORDER BY IDUSUARIO DESC LIMIT 1;

-- 10.  Exclua todas as músicas do gênero "pop".
SELECT * FROM CANCAO C
LEFT JOIN GENEROXCANCAO GC ON GC.IDCANCAO = C.IDCANCAO 
LEFT JOIN GENERO G ON G.IDGENERO = GC.IDGENERO
WHERE G.GENERO = 'POP';

-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`projeto_spotify`.`playlistxcancao`, CONSTRAINT `Idcancao` FOREIGN KEY (`Idcancao`) REFERENCES `cancao` (`idcancao`))
DELETE C
FROM CANCAO C
LEFT JOIN GENEROXCANCAO GC ON GC.IDCANCAO = C.IDCANCAO 
LEFT JOIN GENERO G ON G.IDGENERO = GC.IDGENERO
WHERE G.GENERO = 'POP' ;

-- 11.   Edite todos os artistas que não possuem uma imagem carregada e carregue para eles o texto "Imagem em falta" na coluna de imagens.
SELECT * FROM ARTISTA WHERE IMAGEM IS NULL;

UPDATE ARTISTA
SET IMAGEM = 'Imagem em falta'
where imagem is null;
-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
SELECT * FROM ARTISTA WHERE IMAGEM IS NULL;



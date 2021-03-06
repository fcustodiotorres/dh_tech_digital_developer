CREATE SCHEMA IF NOT EXISTS `UniversoLeitura` DEFAULT CHARACTER SET utf8 ;
USE `UniversoLeitura` ;

-- -----------------------------------------------------
-- Table `UniversoLeitura`.`ASSOCIADOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversoLeitura`.`ASSOCIADOS` (
  `codId` INT NOT NULL AUTO_INCREMENT,
  `rg` CHAR(7) NULL,
  `nome` VARCHAR(50) NULL,
  `sobrenome` VARCHAR(50) NULL,
  `endereco` VARCHAR(150) NULL,
  `cidade` VARCHAR(50) NULL,
  `estado` VARCHAR(2) NULL,
  PRIMARY KEY (`codId`),
  UNIQUE INDEX `rg_UNIQUE` (`rg` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversoLeitura`.`TELEFONES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversoLeitura`.`TELEFONES` (
  `telefoneId` INT NOT NULL AUTO_INCREMENT,
  `telefone_socio` VARCHAR(100) NULL,
  `codAssoc` INT NULL,
  PRIMARY KEY (`telefoneId`),
  INDEX `FK_TELEFONES_ASSOCIADOS_idx` (`codAssoc` ASC) VISIBLE,
  CONSTRAINT `FK_TELEFONES_ASSOCIADOS`
    FOREIGN KEY (`codAssoc`)
    REFERENCES `UniversoLeitura`.`ASSOCIADOS` (`codId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversoLeitura`.`AUTORES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversoLeitura`.`AUTORES` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `sobrenome` VARCHAR(100) NULL,
  `nome` VARCHAR(100) NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversoLeitura`.`EDITORAS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversoLeitura`.`EDITORAS` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `razao_social` VARCHAR(150) NULL,
  `telefone` VARCHAR(100) NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversoLeitura`.`LIVROS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversoLeitura`.`LIVROS` (
  `cod` INT NOT NULL AUTO_INCREMENT,
  `cod_ISBN` VARCHAR(13) NULL,
  `titulo` VARCHAR(200) NULL,
  `ano_criacao` YEAR NULL,
  `cod_autor` INT NULL,
  `ano_publicacao` YEAR NULL,
  `cod_editora` INT NULL,
  PRIMARY KEY (`cod`),
  INDEX `FK_LIVROS_AUTORES_idx` (`cod_autor` ASC) VISIBLE,
  INDEX `FK_LIVROS_EDITORAS_idx` (`cod_editora` ASC) VISIBLE,
  CONSTRAINT `FK_LIVROS_AUTORES`
    FOREIGN KEY (`cod_autor`)
    REFERENCES `UniversoLeitura`.`AUTORES` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_LIVROS_EDITORAS`
    FOREIGN KEY (`cod_editora`)
    REFERENCES `UniversoLeitura`.`EDITORAS` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversoLeitura`.`EMPRESTIMOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversoLeitura`.`EMPRESTIMOS` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `codAssoc` INT NULL,
  `data` DATE NULL,
  `prazo_devolucao` DATE NULL,
  `data_devolucao` DATE NULL,
  PRIMARY KEY (`codigo`),
  INDEX `FK_EMPRESTIMOS_ASSOCIADOS_idx` (`codAssoc` ASC) VISIBLE,
  CONSTRAINT `FK_EMPRESTIMOS_ASSOCIADOS`
    FOREIGN KEY (`codAssoc`)
    REFERENCES `UniversoLeitura`.`ASSOCIADOS` (`codId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversoLeitura`.`EXEMPLARES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversoLeitura`.`EXEMPLARES` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `cod_livro` INT NULL,
  `sinistro` TINYINT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `FK_EXEMPLARES_LIVROS_idx` (`cod_livro` ASC) VISIBLE,
  CONSTRAINT `FK_EXEMPLARES_LIVROS`
    FOREIGN KEY (`cod_livro`)
    REFERENCES `UniversoLeitura`.`LIVROS` (`cod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `UniversoLeitura`.`EMPRESTIMO_EXEMPLARES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UniversoLeitura`.`EMPRESTIMO_EXEMPLARES` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `cod_emprestimo` INT NULL,
  `cod_exemplar` INT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `FK_EMPRESTIMO_EXEMPLARES_EXEMPLARES_idx` (`cod_exemplar` ASC) VISIBLE,
  INDEX `FK_EMPRESTIMO_EXEMPLARES_EMPRESTIMOS_idx` (`cod_emprestimo` ASC) VISIBLE,
  CONSTRAINT `FK_EMPRESTIMO_EXEMPLARES_EXEMPLARES`
    FOREIGN KEY (`cod_exemplar`)
    REFERENCES `UniversoLeitura`.`EXEMPLARES` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_EMPRESTIMO_EXEMPLARES_EMPRESTIMOS`
    FOREIGN KEY (`cod_emprestimo`)
    REFERENCES `UniversoLeitura`.`EMPRESTIMOS` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
# Aula de Formulários

## Iniciar com Form:
  form > recebe os atributos action e method
    ex: <form action ="/registro" methods="post ou get">
    se usar o get aparece no "link" o que foi escrito. Ex quando pesquisa no google.
    Podemos inserir tag <fieldset form = "xxx"> para seperar os tópicos do formulário.
    Inserir <legend> após o fieldset para dar um "tópico" ao tópico. 
    No css pode usar fieldset{} e legend{ }
 
## TAGS dentro do Form:

- Tag input -> 
    atributos: Type, Name e id
        name> campo que o backend usa para identificar o campo
        id> usado para o css e html
        type> tipo do input, ex: text, date, radio
        placeholder> insere texto instrutivo no campo
        
Tipos de Input:
<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">

        
- Tag label -> Descrição do campo, pode ser aplicado para todas outras tags dentro de form.
      Possui o atributo for, que deve receber o mesmo nome do atributo "id" do input

- Tag textarea -> Permite o usuário digitar algo dentro, texto longo.

- Tag select -> Permite selecionar uma opção em um dropdown.
   Recebe itens na lista pela tag "option". com o parametro "value" dentro de option, podendo agrupar pelo optingroup

- Tag button -> Botões
    button type: pode ser reset ou submit
    É configurado pelo javascript
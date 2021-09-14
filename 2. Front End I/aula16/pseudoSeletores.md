# Os pseudos seletores são divididos em:
  ## 1. Pseudo-Classes
  ## 2. Pseudo-Elementos

### Pseudo - Classes:
Utiliza um ":" para acessar.
Ex: seletor:hover{}
>> inputs: focus, enabled, disabled e target
>> links: link, visited, hover e active
>> ver outras em: [Pseudo-Classes](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes)


### Pseudo - Elementos:
Utiliza dois ":" para acessar.
Ex: seletor::pseudo-elemento{}
>> os mais utilizados são: ::before, ::after, ::first-letter e ::first-line
>> before e after são usados junto com a propriedade content, faz com que o conteúdo apareceça no início/final do elemento.

## Esquema Geral da sintaxe CSS
>> a ordem correta para inserir uma regra seria:
selector #id .class :pseudoclasse ::pseudoelemento[atributo]{}

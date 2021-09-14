# Os pseudos seletores são divididos em:
  ## 1. Pseudo-Classes
  ## 2. Pseudo-Elementos

ref aula: [Link Aula](https://br-playground.digitalhouse.com/course/716/unit/68e1eb64-72da-4205-9666-fa2dfabee24c/lesson/1840a672-dc25-467a-91db-a31496b043d4/topic/67fb47ed-c7ef-4407-9d8e-adc20b4b4b28)

### Pseudo - Classes:
Utiliza um ":" para acessar.
Ex: seletor:hover{}
>> em inputs: focus, enabled, disabled e target
>> em links: link, visited, hover e active
>> outras classes: invalid, nth-child(i), required, valid, disabled,
>> ver outras em: [Pseudo-Classes](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes)


### Pseudo - Elementos:
Utiliza dois ":" para acessar.
Ex: seletor::pseudo-elemento{}
>> os mais utilizados são: ::before, ::after, ::first-letter e ::first-line
>> before e after são usados junto com a propriedade content, faz com que o conteúdo apareceça no início/final do elemento.

## Esquema Geral da sintaxe CSS
>> a ordem correta para inserir uma regra seria:
selector #id .class :pseudoclasse ::pseudoelemento[atributo]{}

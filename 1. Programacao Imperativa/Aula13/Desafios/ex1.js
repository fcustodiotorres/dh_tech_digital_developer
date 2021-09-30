function Conta(nNumero, nTipo, nSaldo, nTitular) {
  ;(this.numero = nNumero),
    (this.tipo = nTipo),
    (this.saldo = nSaldo),
    (this.titular = nTitular)
}

const conta1 = new Conta(4254159212, 'Conta Corrent', 2.99, 'Petter')
console.log(conta1)

let banco = {
  numero: [
    '5486273622',
    '1183971869',
    '9582019689',
    '1761924656',
    '7401971607',
    '630841470',
    '4223508636',
    '185979521',
    '3151956165',
    '2138105881'
  ],
  tipo: [
    'Conta Corrente',
    'Conta Poupança',
    'Conta Poupança',
    'Conta Poupança',
    'Conta Poupança',
    'Conta Corrente',
    'Conta Corrente',
    'Conta Poupança',
    'Conta Corrente',
    'Conta Poupança'
  ],
  saldo: [
    '27771',
    '8675',
    '27363',
    '32415',
    '18789',
    '28776',
    '2177',
    '25994',
    '7601',
    '33196'
  ],
  titular: [
    'Abigael Natte',
    'Ramon Connell',
    'Jarret Lafuente',
    'Ansel Ardley',
    'Jacki Shurmer',
    'Jobi Mawtus',
    'Thomasin Latour',
    'Lonnie Verheijden',
    'Alonso Wannan',
    'Bendite Huggett'
  ]
}

let i = 2
console.log(`O cliente ${banco.titular[i]}, nº da conta ${banco.numero[i]} | ${banco.tipo[i]}, possuí saldo de R$ ${banco.saldo[i]}.`)
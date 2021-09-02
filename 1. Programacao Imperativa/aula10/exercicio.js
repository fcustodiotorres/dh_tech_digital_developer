var produtosCompra = ['Refrigerante','Macarrão','Sabonete','Escova','Frutas']

// Valor Padrão
console.log('O valor Padrão é:')
console.log(produtosCompra)

// Pop
console.log('Uso de Pop: Remove o último elemento')
console.log(produtosCompra.pop())

// Join
console.log('Uso de Join: Une todo o texto ou adiciona limitador')
console.log(produtosCompra.join('-'))

// Push
console.log('Uso do Push: Adiciona ao Final')
console.log(produtosCompra.push('Banana'))
console.log(produtosCompra)

// Shift
console.log('Uso do Shift: Remove o Primeiro Elemento do Array e o Retorna')
console.log(produtosCompra.shift())
console.log(produtosCompra)

// Unshift
console.log('Uso do Unshift: Adiciona elemento ao Início do Array')
console.log(produtosCompra.unshift('Maça'))
console.log(produtosCompra)

// IndexOf
console.log('Uso do IndexOf: Mostra a Posição de um Elemento. Encontra o Primeiro')
console.log(produtosCompra.indexOf('Sabonete'))

// LastIndexOf
console.log('Uso do LastIndexOf: Mostra a Posição de um Elemento de Trás para Frente')
console.log(produtosCompra.lastIndexOf('Sabonete'))

// Includes
console.log('Uso do Includes: Verifica se um valor existe no array, se não retorna -1')
console.log(produtosCompra.includes('Sabonete'))

// Reverse
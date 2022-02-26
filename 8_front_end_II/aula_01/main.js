const numbers = [1, 3, 5, 8, 12, 42, 96, 1024]

// Reduce
numbers.reduce((prev, curr) => {
    let result = (prev += curr);
    console.log(`Resultado com Reduce: ${result}`)
    return result
})

console.log('==============')

// For()
function somarTotal(array) {
  var result = 0;
  for(let number of numbers){
      result += number;
      console.log(`Resultado com For Of: ${result}`)
  }
}
somarTotal(numbers);

// Exercício  Aula 16
// https://drive.google.com/file/d/1wQ-zfDde3I1wd9h5phR-mVQLBq74iIdI/view

var v0 = () => ('FizBuzz')
var v1 = () => ('Fiz')
var v2 = () => ('Buzz')

let fizzBuzz = (num1, num2, callback0, callback1, callback2 ) => {
  for (let i = 1; i < 101; i++) {
    if (i % num1 == 0 && i % num2 == 0) {
      console.log(callback0);
    } else if (i % num1 == 0) {
      console.log(callback1);
    } else if (i % num2 == 0) {
      console.log(callback2);
    } else console.log(i);
  }
}

fizzBuzz(7, 10, v0(),v1(),v2())
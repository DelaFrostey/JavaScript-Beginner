const a = () => {
  console.log('I am here')
}
a()
a = 10 // так как a объяввлена константой, изменять её значение стрелочную функцию мы не можем, т.е переприсваивание значения невозможно
a()
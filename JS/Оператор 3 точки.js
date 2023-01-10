//... это оператор разделения объекта на свойства
const button = {
  width: 200,
  text: 'Buy'
}
const redButton = {
  ...button, // при помощи ... мы заимствовали свойства у button для redButton
  color: 'red'
}
console.table(redButton)



const buttonInfo = {
  text: 'Buy'
}
const buttonStyle = {
  color: 'white',
  width: 100,
  height: 200
}
const buttonMain = {
  ...buttonInfo,
  ...buttonStyle
}
console.table(buttonMain)

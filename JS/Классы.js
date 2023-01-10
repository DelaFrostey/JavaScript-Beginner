//экземпляры наследуют свойства прототипов
//экземпляры могут иметь свои свойства
class Comment {
  constructor(text){ //конструктор вызывается только при создании нового экземпляра при помощи new
    this.text = text //this указывает на новый экземпляр создаваемого класса 
    this.votesQty = 0
  }
  upvote() { // метод также будет наследоваться новыми экземплярами
    this.votesQty +=1
  }
  }

const firstComment = new Comment('First comment')
console.log(firstComment)
//instanceof проверка на происхождение экземпляра от класса прототипа
console.log(firstComment instanceof Comment) //возвращает истину так как объект является экземпляром класса
console.log(firstComment instanceof Object)

firstComment.upvote()
console.log(firstComment.votesQty)
firstComment.upvote()
console.log(firstComment.votesQty)


//метод hasOwnProperty наследуется от объекта, с его помощью можно определять принадлежность СОБСТВЕННЫХ (не наследуемых) свойства к какому-нибудь экземпляру
console.log(firstComment.hasOwnProperty('text')) //true
console.log(firstComment.hasOwnProperty('upvote')) //false

const secondComment = new Comment('Second comment')
secondComment.upvote()
console.log(secondComment.votesQty)

const thirdComment = new Comment('Third comment')
thirdComment.upvote()
console.log(thirdComment.text) 
console.log(thirdComment.votesQty) 

//статические методы не наследуются экземплярами класса, мы их вызываем только классом
class Message {
  constructor(text){
    this.text = text
    this.votesQty=0
  }
  upvote() {
    this.votesQty +=1
  }
  static mergeMessage(first, second) { //из-за статик - метод не наследуюется экземпляром
    return `${first}${second}`
  }
}
console.log(Message.mergeMessage('Aboba', 'FLEX'))

class Car {
  constructor(brand){
    this.brand = brand
    this.coutry = ''
    
  }

}
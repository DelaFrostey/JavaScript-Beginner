const age = 25
if(age >=  18) {
  console.log('Is adult')
} else if (age >= 12) {
  console.log('Is teenager')
} else {
  console.log('Is child')
}

//второй вариант

if (age >= 18) {
  console.log('Is Adult')
}

if (age >= 12 && age < 18) {
  console.log('Is Teenager')
}

if (age <12) {
  console.log('Is Child')
}

const sumPosNum= (a,b) => {
  if (typeof a !=='number' || typeof b !=='number') {
    return "One of the arguments is not a number"
  }

  if (a <= 0 || b <= 0 ) {
    return 'One of the arguments is not positive'
  }
  return a + b
}

console.log(sumPosNum(5,10))
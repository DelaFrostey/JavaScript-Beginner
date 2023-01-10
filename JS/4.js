const myCity = {
  city: 'Moscow',
  info:{
    isPopular:true,
    country: 'USA'
  }
}
console.log(myCity.info.isPopular)

delete myCity.info.isPopular

console.log(myCity)
//деструктуризация в функциях// IMPORTANT
const userData = {
  name: 'Igor',
  commentsQty: 0,
  hasSignedAgreement: false,
}

const userInfo = ({name,commentsQty}) => {
  if (!commentsQty) {
    return console.log(`User ${name} has no comments`)
  }
  return console.log(`User ${name} has ${commentsQty} comments`)
}
userInfo(userData)
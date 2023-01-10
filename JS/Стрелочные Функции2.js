// const newPost = (post, addedAt = Date()) => ({
//   ...post,
//   addedAt,
// })
// const firstPost = {
//   id:1,
//   author:'Igor',
// }
// console.log(newPost(firstPost))

//тоже самое только возврат объекта явный
const firstPost = {
  id:1,
  author:'Igor',
}
function GenNewPost(post, addedAt = Date()) {
  const newPost = {
  ...post,
  addedAt}
  return newPost
}
console.log(GenNewPost(firstPost))
// 箭头函数的 this 指向问题
const user = {
  email: 'my@email.com',

  updateEmail: email => {
    this.email = email;
  }
}

user.updateEmail('new@email.com')
console.log(user.email)
// my@email.com
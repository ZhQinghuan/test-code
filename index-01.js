const user = {
  name: '张三',
  address: {
    city: '苏州'
  }
}

Object.freeze(user)

user.name = '李四'
delete user.address
user.school = { city: '安徽' }
user.address.city = '安徽'

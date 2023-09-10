var a = 'coding', b = 'everybody'
console.log(a)
console.log(b)
console.log(a + b)

console.log(1 == '1') // true
console.log(1 === '1') // false

console.log(1 != '1') // false
console.log(1 !== '1') // true

// var id = prompt('아이디를 입력해주세요.')
// if (id == 'egoing' && password == '111111') {
//   console.log('인증 했습니다.')
// } else {
//   console.log('인증에 실패 했습니다.')
// }

function sum (left, right) {
  return left + right
}

var sum2 = function (left, right) {
  return left + right
}

console.log(sum(2, 3))
console.log(sum2(2, 3))
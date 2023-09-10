// 단일 원소 추가(push)
console.log('단일 원소 추가(push)')
var li = ['a', 'b', 'c', 'd', 'e']
li.push('f') // 단일 원소 추가
console.log(li)
console.log()

// 복수 원소 추가(concat)
console.log('복수 원소 추가(concat)')
var li = ['a', 'b', 'c', 'd', 'e']
li = li.concat(['f', 'g']) // 복수 원소 추가
console.log(li)
console.log()

// 단일 원소 앞에 추가(unshift)
console.log('단일 원소 앞에 추가(unshift)')
var li = ['a', 'b', 'c', 'd', 'e']
li.unshift('z') // 단일 원소 앞에 추가
console.log(li)
console.log()

// 원하는 위치에 추가 및 삭제(splice)
console.log('원하는 위치에 추가 및 삭제(splice)')
var li = ['a', 'b', 'c', 'd', 'e']
li.splice(2, 0, 'B') // 2번째 인덱스에 'B' 추가
console.log(li) // [ 'a', 'b', 'B', 'c', 'd', 'e' ]

var li = ['a', 'b', 'c', 'd', 'e']
li.splice(2, 1, 'B') // 2번째 인덱스에 'B' 추가하고 뒤에 1개 삭제
console.log(li) // [ 'a', 'b', 'B', 'd', 'e' ]

var li = ['a', 'b', 'c', 'd', 'e']
li.splice(2, 2, 'B') // 2번째 인덱스에 'B' 추가하고 뒤에 2개 삭제
console.log(li) // [ 'a', 'b', 'B', 'e' ]
console.log()

// 삭제(shift, pop)
console.log('삭제(shift, pop)')
var li = ['a', 'b', 'c', 'd', 'e']
li.shift() // 첫번째 원소 삭제
console.log(li) // [ 'b', 'c', 'd', 'e' ]

var li = ['a', 'b', 'c', 'd', 'e']
li.pop() // 마지막 원소 삭제
console.log(li) // [ 'a', 'b', 'c', 'd' ]
console.log()

// 정렬(sort)
console.log('정렬(sort)')
var li = ['c', 'e', 'a', 'b', 'd']
li.sort() // 정렬
console.log(li) // [ 'a', 'b', 'c', 'd', 'e' ]

// 뒤집기(reverse)
console.log('뒤집기(reverse)')
var li = ['c', 'e', 'a', 'b', 'd']
li.reverse() // 뒤집기
console.log(li) // [ 'd', 'b', 'a', 'e', 'c' ]
console.log()

// 함수 밖에서 선언하면 전역 변수가 된다.
var scope = 'global';

function fscope () {
  var scope = 'local';

  // 같은 변수명이 있다면 지역 변수를 우선한다.
  console.log('함수 안 ' + scope); // local scope
}

fscope();
console.log('함수 밖 ' + scope); // global scope

// 전역 변수를 사용하고 싶지 않을 때
(function () {
  var scope = 'not use global';
  console.log(scope);
}());

// 자바스크립트는 함수가 선언된 시점에서 유호범위를 갖는다.
// 이러한 유효범위를 정적 유효범위(static scoping), 혹은 렉시컬(lexical scoping)이라고 한다.
var i = 10;

function a () {
  var i = 5;
  b();
}

function b () {
  console.log(i);
}

a(); // 10
//* 함수 선언
function outer() {
  return 'hello';
}
//* 함수 대입 & 익명 함수 & 함수 리터럴
const outerTwo = function () {
  return 'bye';
};

const outerThree = () => 'wow';

const outerFour = (a) => a;

console.log(outer());
console.log(outerTwo());
console.log(outerThree());

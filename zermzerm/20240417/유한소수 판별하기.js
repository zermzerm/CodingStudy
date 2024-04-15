/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120878
 * 문제 이름 : 종한소수 판별하기
 * 문제 풀이 포인트: 최대 공약수 구해서 분모 나누고 분모가 2또는 5로 나누어 떨어질때까지 나누고 결과가 1이 아닌 경우 false
 * 나의 실수: 최대 공약수 구하는 쉬운방법을 이제야 알았다...
 */

//최대공약수 구하는 방법
// function GCD(a, b) {
//   let gcd = 1;
//   for (let i = 1; i <= Math.min(a, b); i++) {
//     if (a % i === 0 && b % i === 0) gcd = i;
//   }
// }

function measure(a) {
  let arr = [];
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) arr.push(i);
  }
  return arr;
}

function solution(a, b) {
  let aArr = measure(a);
  let bArr = measure(b);
  let cd = [];
  for (let i = 0; i < aArr.length; i++) {
    for (let j = 0; j < bArr.length; j++) {
      if (aArr[i] === bArr[j]) cd.push(aArr[i]);
    }
  }
  b /= Math.max(...cd);
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;
  return b !== 1 ? 2 : 1;
}

console.log(solution(12, 21));

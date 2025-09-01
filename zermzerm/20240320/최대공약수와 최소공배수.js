/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12940
 * 문제 풀이 포인트: for와 for와 for와 for와 if
 * 나의 실수: 너무 for가 많아... 다른 방법이 없을까
 */

//최대공약수
function GCD(n, m) {
  let gcd = 1;
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) gcd = i;
  }
  return gcd;
}

//두 자연수의 곱 = 최대공약수 * 최소공배수

function solution(n, m) {
  let answer = [];
  let nArr = [],
    mArr = [];
  if (m % n === 0) {
    answer.push(n, m);
    return answer;
  }
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) nArr.push(i);
  }
  for (let i = 1; i <= m; i++) {
    if (m % i === 0) mArr.push(i);
  }
  nArr.sort((a, b) => b - a);
  for (let i = 0; i < nArr.length; i++) {
    if (mArr.includes(nArr[i])) {
      answer.push(nArr[i]);
      break;
    }
  }
  answer.push((((n / answer[0]) * m) / answer[0]) * answer[0]);
  return answer;
}

console.log(solution(3, 12));

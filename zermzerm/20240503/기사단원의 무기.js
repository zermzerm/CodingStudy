/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/136798
 * 문제 이름 : 기사단원의 무기
 * 문제 풀이 포인트: 약수 구하고 개수 return하는 함수 만들어서 계산
 * 나의 실수: 약수 구할때 무작정 %i ===0으로 구하면 효율성 떨어지니 제곱근까지만 구하는식으로 하면 훨씬 효율적이다
 */

function measure(number) {
  let cnt = 0;
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      cnt++;
      if (i != number / i) cnt++;
    }
  }
  return cnt;
}

function solution(number, limit, power) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    if (measure(i) > limit) result += power;
    else result += measure(i);
  }
  return result;
}

console.log(solution(5, 3, 2));

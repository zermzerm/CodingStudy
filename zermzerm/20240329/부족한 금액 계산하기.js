/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/82612
 * 문제 풀이 포인트: x
 * 나의 실수:
 */

const solution = (price, money, count) => {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  return sum > money ? sum - money : 0;
};

console.log(solution(3, 20, 4));

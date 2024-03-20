/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/77884
 * 문제 풀이 포인트: X
 * 나의 실수: x
 */

const numberOfDivisors = (n) => {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) cnt++;
  }
  return cnt;
};

const solution = (left, right) => {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    answer += numberOfDivisors(i) % 2 === 0 ? i : -i;
  }
  return answer;
};

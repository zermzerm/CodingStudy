/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12943?language=javascript
 * 문제 풀이 포인트: 문제에서 설명하는 순서대로 구현
 * 나의 실수: X
 */

const solution = (num) => {
  let steps = 0;
  while (num > 1) {
    if (num % 2 === 0) num /= 2;
    else num = num * 3 + 1;
    steps++;

    if (steps >= 500) break;
  }
  return steps >= 500 ? -1 : steps;
};

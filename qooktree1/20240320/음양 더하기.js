/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/76501
 * 문제 풀이 포인트: reduce
 * 나의 실수: X
 */

const solution = (absolutes, signs) => {
  return absolutes.reduce((a, b, i) => {
    if (signs[i]) return a + b;
    return a - b;
  }, 0);
};

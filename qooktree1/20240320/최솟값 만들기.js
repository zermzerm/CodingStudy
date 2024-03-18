/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12941
 * 문제 풀이 포인트: 어떻게 최소한의 곱을 구할까에 대해 생각해보자
 * 나의 실수: X
 */

const solution = (A, B) => {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((a, b, i) => a + A[i] * B[i], 0);
};

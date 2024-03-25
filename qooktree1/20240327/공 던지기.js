/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120843
 * 문제 풀이 포인트: 나머지 개념 사용하기
 * 나의 실수: X
 */

const solution = (numbers, k) => numbers[(2 * (k - 1)) % numbers.length];

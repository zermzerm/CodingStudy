/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12939
 * 문제 풀이 포인트: map에 Number 사용
 * 나의 실수: X
 */

const solution = (s) => {
  const sArr = s.split(" ").map(Number);
  return `${Math.min(...sArr)} ${Math.max(...sArr)}`;
};

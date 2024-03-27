/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12917
 * 문제 풀이 포인트: localeCompare: 문자열 정렬
 * 나의 실수: X
 */

const solution = (s) => {
  const lowerCase = s
    .split("")
    .filter((c) => c === c.toLowerCase())
    .sort((a, b) => b.localeCompare(a))
    .join("");
  const upperCase = s
    .split("")
    .filter((c) => c === c.toUpperCase())
    .sort((a, b) => b.localeCompare(a))
    .join("");
  return lowerCase + upperCase;
};

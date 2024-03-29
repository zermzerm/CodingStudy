/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181902
 * 문제 풀이 포인트: ASCII 코드, charCodeAt
 * 나의 실수: 초반에 풀이할 때 대문자, 소문자 비교를 하지 않았음
 */

const solution = (myString) => {
  const alphabetMap = Array(52).fill(0);
  myString.split("").forEach((c) => {
    if (c === c.toLowerCase()) alphabetMap[c.charCodeAt() - (97 - 26)]++;
    else alphabetMap[c.charCodeAt() - 65]++;
  });
  return alphabetMap;
};

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript#
 * 문제 풀이 포인트: sort method
 * 나의 실수: 0으로만 이루어진 numbers 배열이 있을 거라는 예외처리를 하지 않았다.
 */

const solution = (numbers) => {
  const sortedNumbers = numbers
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("");
  return +sortedNumbers === 0 ? "0" : sortedNumbers;
};

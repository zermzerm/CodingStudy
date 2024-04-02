/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/42746
 * 문제 이름 : 가장 큰 수
 */

function solution(numbers) {
  const sort = numbers
    .map((val) => String(val))
    .sort((a, b) => b + a - (a + b))
    .join("");
  return sort.startsWith("0") ? "0" : sort;
}

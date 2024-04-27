/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/138477
 * 문제 이름 : 명예의 전당 (1)
 */

function solution(k, score) {
  const result = [];
  const array = [];

  score.forEach((val) => {
    array.push(val);
    array.sort((a, b) => b - a).splice(k);
    result.push(array[array.length - 1]);
  });

  return result;
}

/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/135808
 * 문제 이름 : 과일 장수
 */

function solution(k, m, score) {
  let result = 0;
  let temp = score.sort((a, b) => b - a);
  for (let i = m; i <= temp.length; i += m) {
    result += temp[i - 1] * m;
  }
  return result;
}

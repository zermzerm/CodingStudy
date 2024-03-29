/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120902
 * 문제 이름 : 문자열 계산하기
 */

function solution(my_string) {
  let split = my_string.split(" ");
  let result = Number(split[0]);
  for (let i = 1; i <= split.length; i += 2) {
    if (split[i] === "+") {
      result += Number(split[i + 1]);
    }
    if (split[i] === "-") {
      result -= Number(split[i + 1]);
    }
  }
  return result;
}

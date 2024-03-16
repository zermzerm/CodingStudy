/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181909
 * 문제 풀이 포인트: slice
 * 나의 실수: 문제 이해를 못해서 못풀었었다.
 */

function solution(my_string) {
  let answer = [];
  for (let i = 0; i < my_string.length; i++) {
    answer.push(my_string.slice(i));
  }
  return answer.sort();
}

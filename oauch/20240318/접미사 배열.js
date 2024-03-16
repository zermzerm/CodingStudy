/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181909
 * 문제 이름 : 접미사 배열
 */

function solution(my_string) {
  const result = [];
  for (let i = 0; i < my_string.length; i++) {
    result.push(my_string.slice(i));
  }
  return result.sort();
}

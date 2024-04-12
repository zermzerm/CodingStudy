/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181943
 * 문제 이름 : 문자열 겹쳐쓰기
 */

function solution(my_string, overwrite_string, s) {
  const result = my_string.split("");
  result.splice(s, overwrite_string.length, overwrite_string);
  return result.join("");
}

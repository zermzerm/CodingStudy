/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181943
 * 문제 풀이 : splice() 활용
 */

function solution(my_string, overwrite_string, s) {
  let arr = [...my_string];
  arr.splice(s, overwrite_string.length, overwrite_string);
  return arr.join("");
}

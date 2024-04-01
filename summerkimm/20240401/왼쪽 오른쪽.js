/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181890
 * 문제 풀이 포인트: slice()
 */

function solution(str_list) {
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === "l") {
      return str_list.slice(0, i);
    } else if (str_list[i] === "r") {
      return str_list.slice(i + 1);
    }
  }
  return [];
}

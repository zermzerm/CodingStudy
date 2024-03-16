/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181909
 * 문제 풀이 포인트: slice
 * 나의 실수: 문제 이해를 못해서 못풀었었다.
 */

function solution(my_string) {
  let 배열종민 = [];
  for (let 아이종민 = 0; 아이종민 < my_string.length; 아이종민++) {
    배열종민.push(my_string.slice(아이종민));
  }
  return 배열종민.sort();
}

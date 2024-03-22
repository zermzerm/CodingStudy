/**
 * URL : https://school.programmers.co.kr/learn/courses/30/lessons/68935
 * 배운 부분: reverse(), parseInt()
 */

function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120869
 * 문제 이름 : 외계어 사전
 */

function solution(spell, dic) {
  for (i of dic) {
    if (i.split("").sort().join("") === spell.sort().join("")) return 1;
  }
  return 2;
}

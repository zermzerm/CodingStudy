/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12911
 * 문제 이름 : 다음 큰 숫자
 */

function solution(n) {
  let one = n.toString(2).split("1").length;
  while (1) {
    n++;
    if (one === n.toString(2).split("1").length) return n;
  }
}

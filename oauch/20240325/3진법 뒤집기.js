/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/68935
 * 문제 이름 : 3진법 뒤집기
 * 배운점 : 10진법 -> N진법 val.toString(N) / N진법 -> 10진법 parseInt(val, N);
 */

function solution(n) {
  const three = n.toString(3).split("");
  return parseInt(
    three.map((_, index) => three[three.length - 1 - index]).join(""),
    3
  );
}

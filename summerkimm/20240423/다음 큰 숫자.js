/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12911
 * 문제 실수 : split("1")으로 나눠서 그에 따른 length 구하는 것을 생각 못 함
 */

function solution(n) {
  let number = n.toString(2).split("1").length;
  while (true) {
    n++;
    if (number === n.toString(2).split("1").length) {
      return n;
    }
  }
}

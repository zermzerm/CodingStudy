/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181903
 * 문제 이름 : qr code
 */

function solution(q, r, code) {
  return code
    .split("")
    .filter((val, index) => index % q === r && val)
    .join("");
}

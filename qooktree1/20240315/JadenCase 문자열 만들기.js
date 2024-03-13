/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12951
 * 문제 풀이 포인트: 연결된 빈 문자열이 있을 경우를 생각해보자
 * 나의 실수: 계속 런타임 에러가 났다 -> 확인해보니 빈문자열이 map의 item으로 올때 "".toUpperCase() 에서 문제가 발생하는 것이였다.
 */

const solution = (s) =>
  s
    .toLowerCase()
    .split(" ")
    .map((c) => (c.length > 0 ? c[0].toUpperCase() + c.slice(1) : ""))
    .join(" ");

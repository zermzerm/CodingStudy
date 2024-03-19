/**
 * URL: https://www.acmicpc.net/problem/2751
 * 문제 풀이 포인트: sort method
 * 나의 실수: console.log도 런타임 시간에 영향을 끼쳐 join을 사용할 수 있다면 for문 안에서 console.log를 사용하는 행위는 자제하자
 */

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(1);

console.log(input.sort((a, b) => a - b).join("\n"));

/**
 * URL: https://www.acmicpc.net/problem/2750
 * 문제 풀이 포인트: sort method
 * 나의 실수: X
 */

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let arr = input.slice(1, input.length);
arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) console.log(arr[i]);

/**
 * URL: https://www.acmicpc.net/problem/10825
 * 문제 풀이 포인트: sort 에 대해 잘 이해하고 있는지
 * 나의 실수: sort에 대해 잘 이해하고 있지 못하였다.
 */

const [, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const students = input.map((item) => item.split(" "));
students.sort((a, b) => {
  if (+a[1] !== +b[1]) return b[1] - a[1];
  if (+a[2] !== +b[2]) return a[2] - b[2];
  if (+a[3] !== +b[3]) return b[3] - a[3];
  for (let i = 0; i < Math.min(a[0].length, b[0].length); i++) {
    if (a[0].charCodeAt(i) === b[0].charCodeAt(i)) continue;
    else return a[0].charCodeAt(i) - b[0].charCodeAt(i);
  }
});

console.log(students.map((student) => student[0]).join("\n"));

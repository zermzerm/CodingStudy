/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181949
 * 문제 풀이 포인트: toUpperCase, toLowerCase method 사용
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 주어진 문자열의 문자를 비교하며 대문자면 소문자로, 소문자면 대문자로 변환해준다.
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  let str = input[0];
  const answer = str
    .split("")
    .map((c) => {
      if (c === c.toUpperCase()) return c.toLowerCase();
      return c.toUpperCase();
    })
    .join("");
  console.log(answer);
});

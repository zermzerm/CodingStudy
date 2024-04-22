/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181949
 * 문제 이름 : 대소문자 바꿔서 출력하기
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
  str = input[0];
  const result = [...str]
    .map((val) =>
      val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase()
    )
    .join("");
  console.log(result);
});

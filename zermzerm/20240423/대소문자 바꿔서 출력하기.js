/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181949
 * 문제 이름 : 대소문자 바꿔서 출력하기
 * 문제 풀이 포인트: toUpperCase(), toLowerCase()
 * 나의 실수: console.log로 답을 적어야되는구나...
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  let answer = '';
  for (let i = 0; i < input[0].length; i++) {
    answer +=
      input[0][i] === input[0][i].toUpperCase()
        ? input[0][i].toLowerCase()
        : input[0][i].toUpperCase();
  }
  console.log(answer);
});

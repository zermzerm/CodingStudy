/**
 * URL: https://www.acmicpc.net/problem/14425
 * 문제 풀이 포인트: 해시
 * 나의 실수: split method에 \r를 추가했더니 input에서 r이 들어간 것들을 제거하여 오류가 발생했다.
 */

const input = require("fs")
  .readFileSync("qooktree1/추가 문제/test.txt")
  .toString()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const sObj = {};
let answer = 0;

for (let i = 0; i < N; i++) sObj[input[i]] = true;
for (let i = N; i < N + M; i++) if (sObj[input[i]]) answer++;
console.log(answer);

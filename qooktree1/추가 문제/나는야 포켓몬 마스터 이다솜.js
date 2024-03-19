/**
 * URL: https://www.acmicpc.net/problem/1620
 * 문제 풀이 포인트: 시간 초과를 고려하여 코드 짜기
 * 나의 실수: hash를 제대로 활용하지 않아 첫 코드 시간 초과 발생
 */

const [NM, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const [N, M] = NM.split(" ").map(Number);

const POKEMON_DICT = {};

for (let i = 0; i < N; i++) {
  POKEMON_DICT[input[i].trim()] = i + 1;
  POKEMON_DICT[i + 1] = input[i].trim();
}

const answer = [];
for (let i = N; i < N + M; i++) {
  answer.push(POKEMON_DICT[input[i].trim()]);
}
console.log(answer.join("\n"));

/*
// 시간 초과 코드
const [NM, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const allItems = input.map((item) => item.trim());
const N = Number(NM.split(" ")[0]);
const POKEMON_DICT = allItems.slice(0, N);
const ANSWER_DICT = allItems.slice(N);

for (let i = 0; i < ANSWER_DICT.length; i++) {
  if (!isNaN(ANSWER_DICT[i])) {
    console.log(POKEMON_DICT[Number(ANSWER_DICT[i]) - 1]);
  } else {
    console.log(POKEMON_DICT.indexOf(ANSWER_DICT[i]) + 1);
  }
}


*/

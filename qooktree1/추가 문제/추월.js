/**
 * URL: https://www.acmicpc.net/problem/2002
 * 문제 풀이 포인트: 객체 - 정렬에 대해 조금 더 생각해보는 시간을 가졌다.
 * 나의 실수: 문제의 뜻을 이해를 못했다..! 5번 틀렸다..!!!
 */

let [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
N = +N;

const IN_CAR_DICT = {};
const outCarArr = [];
for (let i = 0; i < N; i++) IN_CAR_DICT[input[i].trim()] = i;
for (let i = N; i < N + N; i++) outCarArr.push(input[i].trim());

let answer = 0;
for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    if (IN_CAR_DICT[outCarArr[i]] > IN_CAR_DICT[outCarArr[j]]) {
      answer++;
      break;
    }
  }
}

console.log(answer);

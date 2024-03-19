/**
 * URL: https://www.acmicpc.net/problem/7785
 * 문제 풀이 포인트: Map
 * 나의 실수: localeCompare method에 대해 제대로 알고 써보자
 */

let [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const officePerson = new Map();

for (let i = 0; i < +n; i++) {
  const [name, state] = input[i].trim().split(" ");
  if (state === "enter") officePerson.set(name, name);
  else if (state === "leave") officePerson.delete(name);
}

console.log(
  Array.from(officePerson, (item) => item[0])
    .sort()
    .reverse()
    .join("\n")
);

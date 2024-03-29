/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * 문제 풀이 포인트: 해시
 * 다시 풀기!
 */

function solution(participant, completion) {
  let result = new Map();

  participant.map((val) =>
    result.has(val) ? result.set(val, result.get(val) + 1) : result.set(val, 1)
  );
  completion.map(
    (val) => result.has(val) && result.set(val, result.get(val) - 1)
  );

  for (let [key, val] of result) {
    if (val !== 0) return key;
  }
}

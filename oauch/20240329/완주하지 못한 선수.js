/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * 문제 이름 : 완주하지 못한 선수
 */

function solution(participant, completion) {
  let result = new Map();

  participant.map((val) =>
    result.has(val) ? result.set(val, result.get(val) + 1) : result.set(val, 0)
  );
  completion.map(
    (val) => result.has(val) && result.set(val, result.get(val) - 1)
  );

  for (let [key, val] of result) {
    if (val > 1 || val === 0) return key;
  }
}

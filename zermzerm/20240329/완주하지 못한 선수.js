/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * 문제 풀이 포인트:
 * 나의 실수:
 */

const solution = (participant, completion) => {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
};

console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);

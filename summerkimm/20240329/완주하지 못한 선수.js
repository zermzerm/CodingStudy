/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * 문제 풀이 포인트: 해시
 * 다시 풀기!
 */

// 미해결
function solution(participant, completion) {
  let hashMap = new Map();

  for (let i = 0; i < participant.length; i++) {
    hashMap.set(participant[i], 1);
  }

  for (let j = 0; j < completion.length; j++) {
    if (hashMap.has(completion[j])) {
      console.log(hashMap.get(completion[j]));
    }
  }
}

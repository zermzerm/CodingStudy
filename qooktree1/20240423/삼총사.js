/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/131705
 * 문제 풀이 포인트: 삼중 for문
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 삼중 for문
 */

const solution = (number) => {
  let answer = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) answer++;
      }
    }
  }
  return answer;
};

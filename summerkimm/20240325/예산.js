/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12982
 * 문제 풀이 포인트: 그리디
 */

function solution(d, budget) {
  d.sort((a, b) => a - b);
  let answer = 0;
  for(let i = 0; i < d.length; i++) {
      if ((budget - d[i]) >= 0) {
          answer++;
          budget -= d[i];
      }
  }
  return answer;
}

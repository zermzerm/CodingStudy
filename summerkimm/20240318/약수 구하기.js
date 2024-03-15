/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120897
 * 나의 풀이: for문 사용
 */

function solution(n) {
  var answer = [];
  for(let i = 1; i < n + 1; i++) {
      if(n % i === 0) {
          answer.push(i);
      }
  }
  return answer;
}

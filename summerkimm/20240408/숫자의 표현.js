/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12924
 */

// 효율성 통과 못함 why!!
function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    let sum = i;
    for (let j = i + 1; sum < n; j++) {
      sum += j;
    }
    if (sum === n) {
      answer++;
    }
  }
  return answer;
}

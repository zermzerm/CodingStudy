/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12982
 * 문제 이름 : 예산
 */

function solution(d, budget) {
  let count = 0;
  d.sort((a, b) => a - b).map((val) => {
    budget -= val;
    if (budget >= 0) count += 1;
  });
  return count;
}

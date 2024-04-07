/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120860
 * 문제 풀이 과정
 * 1. x좌표를 기준으로 정렬 [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ] 
 * 2. 0번째 요소를 기준으로 x축, y축으로 빼고 절댓값으로 씌우고 곱하기
 */
function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  const one = Math.abs(dots[0][1] - dots[1][1]);
  const theOther = Math.abs(dots[0][0] - dots[2][0]);
  return one * theOther;
}

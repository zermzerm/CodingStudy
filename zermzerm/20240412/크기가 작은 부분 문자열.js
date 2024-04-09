/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/147355
 * 문제 이름 : 크기가 작은 부분 문자열
 * 문제 풀이 포인트: for문 돌려서 slice로 p길이만큼 잘라서 비교
 * 나의 실수:
 */

function solution(t, p) {
  let cnt = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    if (t.slice(i, i + p.length) <= +p) cnt++;
  }
  return cnt;
}

console.log(solution('3141592', '271'));

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181851?language=javascript
 * 문제 이름 : 전국 대회 선발 고사
 * 문제 풀이 포인트: index로 for돌려서 낮은 순서대로 찾기
 * 나의 실수:
 */

function solution(rank, attendance) {
  const answer = [];
  for (let i = 1; i <= rank.length; i++) {
    if (answer.length === 3) break;
    if (attendance[rank.indexOf(i)]) answer.push(rank.indexOf(i));
  }
  return answer[0] * 10000 + answer[1] * 100 + answer[2];
}

console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
);

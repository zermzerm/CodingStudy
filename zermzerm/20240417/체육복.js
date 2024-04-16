/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42862
 * 문제 이름 : 종육복
 * 문제 풀이 포인트: 그리디! 정렬해주고 중복값빼고 for문 돌려서 값의 차가 1인경우 reserve에서 빼주고 cnt++
 * 나의 실수: 중복된 값들을 먼저 빼줬어야됐는데 for문 안에서 빼주려고 해서 안됐었다. 5, 12번 케이스...
 */

function solution(n, lost, reserve) {
  let cnt = 0;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i])) {
      lost.splice(lost.indexOf(reserve[i]), 1);
      reserve.splice(reserve.indexOf(reserve[i]), 1);
      i--;
    }
  }
  console.log(lost, reserve);
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (Math.abs(lost[i] - reserve[j]) === 1) {
        reserve.splice(j, 1);
        cnt++;
        break;
      }
    }
  }
  return n - lost.length + cnt;
}

console.log(solution(5, [1, 2, 3], [2, 3, 4]));

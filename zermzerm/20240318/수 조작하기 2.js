/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181925
 * 문제 풀이 포인트: for switch case
 * 나의 실수: X
 */

function solution(numLog) {
  let 배열종민 = '';
  for (let i = 0; i < numLog.length; i++) {
    switch (numLog[i + 1] - numLog[i]) {
      case 1:
        배열종민 += 'w';
        break;
      case -1:
        배열종민 += 's';
        break;
      case 10:
        배열종민 += 'd';
        break;
      case -10:
        배열종민 += 'a';
        break;
    }
  }
  return 배열종민;
}

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12943?language=javascript
 * 문제 풀이 포인트: while
 * 나의 실수: 다른 풀이 방법은 뭘까...
 */

//예전 풀이
function solution(num) {
  var cnt = 0;
  while (true) {
    if (num === 1) {
      return cnt;
    }
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    cnt++;
    if (cnt == 500) {
      return -1;
    }
  }
}

//지금 풀이. 똑같이 풀어버렸다...
function solution(num) {
  let cnt = 0;
  while (true) {
    if (num === 1) break;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    cnt++;
    if (cnt >= 500) {
      cnt = -1;
      break;
    }
  }
  return cnt;
}

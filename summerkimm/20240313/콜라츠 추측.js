/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12943
 * 문제 풀이 포인트: for문 인 줄 알았으나 찾아보니 while문..?
 * 나의 실수: X
 */

function solution(num) {
  let answer;
  for(let i = 0; i < 500; i++) {
      if (num !== 1) {
          num = num % 2 === 0 ? num / 2 : num * 3 + 1;
      } else {
          return answer = i;
      }
  } return -1;
}

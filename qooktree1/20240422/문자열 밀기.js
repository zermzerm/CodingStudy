/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120921
 * 문제 풀이 포인트: substring
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 반복문을 A의 길이만큼 돌면서 B를 한 인덱스씩 이동시키며 비교한다.
 */

const solution = (A, B) => {
  let answer = 0;
  for (let i = 0; i < A.length; i++) {
    if (A === B) return answer;
    B = B.substring(1, B.length) + B[0];
    answer++;
  }
  return -1;
};

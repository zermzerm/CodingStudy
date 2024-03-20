/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12980
 * 문제 풀이 포인트: divmod 생각하기
 * 나의 실수: X
 */

const solution = (n) => {
  let answer = 0;
  while (n >= 1) {
    if (n % 2 === 0) n /= 2;
    else {
      n -= 1;
      answer++;
    }
  }
  return answer;
};

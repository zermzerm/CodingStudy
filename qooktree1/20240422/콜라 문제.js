/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/132267
 * 문제 풀이 포인트: %, / 연산자를 이용한 풀이
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 보유 중인 빈 병의 개수가 2 이상일 경우에 while문을 통해서 병 교환을 진행한다.
 * 2. 만약 가져다줘야 하는 빈병 a의 개수가 n보다 클 경우에는 현재까지 구한 받을 수 있는 콜라 병의 개수를 반환한다.
 */

const solution = (a, b, n) => {
  let answer = 0;
  while (n >= 2) {
    if (n < a) return answer;
    const returnCoke = Math.floor(n / a) * b;
    answer += returnCoke;
    n = returnCoke + (n % a);
  }
  return answer;
};

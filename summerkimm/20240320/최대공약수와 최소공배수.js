/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12940
 * 문제 풀이 포인트 : 최대공약수와 최소공배수 개념
 * 나의 실수 : 두 수의 곱을 최대공약수로 나누면 최소공배수가 되는거 처음 앎ㅎ;
 */

function solution(n, m) {
  let answer = [];

  for (let i = 1; i < n + 1; i++) {
    if (n % i == 0 && m % i == 0) {
      answer[0] = i;
    }
  }
  answer[1] = (n * m) / answer[0];

  return answer;
}

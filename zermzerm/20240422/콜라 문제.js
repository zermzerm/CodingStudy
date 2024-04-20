/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/132267
 * 문제 이름 : 콜라 문제
 * 문제 풀이 포인트: 나눈 몫과 나머지를 n으로 처리하고 몫을 총 합(sum)에 추가하는 식으로 while문 총 개수n이 최소 교환 개수보다 작아질때까지 반복
 * 나의 실수: while문에 등호 실수
 */

function solution(a, b, n) {
  let sum = 0;
  while (n >= a) {
    sum += Math.floor(n / a) * b;
    n = (n % a) + Math.floor(n / a) * b;
  }
  return sum;
}

console.log(solution(2, 1, 20));

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/86051
 * 문제 풀이 포인트: for 만세, 1부터 9까지의 합
 * 나의 실수: X
 */

function solution(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return 45 - sum;
}

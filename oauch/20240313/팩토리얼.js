/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120848
 * 문제 이름 : 팩토리얼
 * 풀긴 풀었는데 찜찜하다.. 다음 시도때는 break문 안 쓰고 해결 해보고 싶다
 */

function solution(n) {
  let count = 1;
  while (n !== 1) {
    if (n < 1) {
      count -= 1;
      break;
    }
    count += 1;
    n /= count;
  }
  return count;
}

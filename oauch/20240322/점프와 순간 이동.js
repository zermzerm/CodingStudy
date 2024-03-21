/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12980
 * 문제 이름 : 점프와 순간 이동
 * 부족한 점 : 진짜 부족한 거 같아서 구글링 좀 했습니다..
 */

function solution(n) {
  let count = 1;
  while (n !== 1) {
    n /= 2;
    if (n % 1 !== 0) {
      n = Math.floor(n);
      count += 1;
    }
  }
  return count;
}

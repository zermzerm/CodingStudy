/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12943
 * 문제 이름 : 콜라츠 추측
 */

function solution(num) {
  let count = 0;
  while (num !== 1) {
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);
    count += 1;
    if (count === 500) return -1;
  }
  return count;
}

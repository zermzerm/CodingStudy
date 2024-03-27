/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/82612
 * 문제 이름 : 부족한 금액 계산하기
 */

function solution(price, money, count) {
  let result = 0;
  let upPrice = 0;
  for (let i = 1; i <= count; i++) {
    upPrice = price * i;
    result += upPrice;
  }
  return result > money ? result - money : 0;
}

/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12939
 * 문제 이름 : 최댓값과 최솟값
 * 문제점 : 다 구하고 for문으로 값을 구하려고 했었다 (좀 더 단순하게 생각하자 🥹)
 */

function solution(s) {
  const orderNum = s
    .split(" ")
    .map((val) => Number(val))
    .sort((a, b) => a - b);
  return orderNum[0] + " " + orderNum[orderNum.length - 1];
}

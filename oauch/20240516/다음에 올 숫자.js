/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120924
 * 문제 이름 : 다음에 올 숫자
 */

function solution(common) {
  const lastValue = common[common.length - 1];
  const secondLastValue = common[common.length - 2];
  return common[1] - common[0] === common[2] - common[1]
    ? lastValue + (lastValue - secondLastValue)
    : lastValue * (lastValue / secondLastValue);
}

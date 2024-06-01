/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/17682
 * 문제 풀이 포인트: 구현문제 + 스택
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 다크 게임의 점수 계산 로직을 차례대로 구현
 */

const solution = (dartResult) => {
  let stack = [];
  let tmp = "";
  dartResult.split("").forEach((dart) => {
    if (!isNaN(dart)) tmp += dart;
    else {
      switch (dart) {
        case "S":
          stack.push(+tmp);
          tmp = "";
          break;
        case "D":
          stack.push((+tmp) ** 2);
          tmp = "";
          break;
        case "T":
          stack.push((+tmp) ** 3);
          tmp = "";
          break;
        case "*":
          stack[stack.length - 2] = stack[stack.length - 2] * 2;
          stack[stack.length - 1] = stack[stack.length - 1] * 2;
          break;
        case "#":
          stack[stack.length - 1] = stack[stack.length - 1] * -1;
          break;
      }
    }
  });
  return stack.reduce((a, b) => a + b, 0);
};

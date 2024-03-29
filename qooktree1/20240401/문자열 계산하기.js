/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120902
 * 문제 풀이 포인트: 스택
 * 나의 실수: X
 */

const solution = (myString) => {
  let answer = 0;
  const stack = [];
  const myStringArr = myString.split(" ");

  myStringArr.forEach((c) => {
    if (stack.length >= 2) {
      const op = stack.pop();
      const num = stack.pop();
      if (op === "+") answer = +num + +c;
      else answer = +num - +c;
      stack.push(answer);
    } else stack.push(c);
  });
  return answer;
};

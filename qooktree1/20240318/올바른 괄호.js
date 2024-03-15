/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12909
 * 문제 풀이 포인트: 스택
 * 나의 실수: X
 */

const solution = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === "(" && s[i] === ")") stack.pop();
    else stack.push(s[i]);
  }
  return stack.length ? false : true;
};

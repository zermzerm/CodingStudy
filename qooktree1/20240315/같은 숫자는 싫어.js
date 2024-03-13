/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12906
 * 문제 풀이 포인트: 스택
 * 나의 실수: X
 */

const solution = (arr) => {
  const stack = [];
  for (const num of arr) {
    if (stack[stack.length - 1] !== num) stack.push(num);
  }
  return stack;
};

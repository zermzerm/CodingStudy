/**
 * URL : https://school.programmers.co.kr/learn/courses/30/lessons/142086
 */
function solution(s) {
  let answer = [];
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.includes(s[i])) {
      answer.push(-1);
    } else {
      answer.push(i - stack.lastIndexOf(s[i]));
    }
    stack.push(s[i]);
  }
  return answer;
}

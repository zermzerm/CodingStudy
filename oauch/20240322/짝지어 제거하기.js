/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12973
 * 문제 이름 : 짝지어 제거하기
 * 배워야할 점 : 책 좀 읽어야겠다;; 독해력이 아주 바닥이다
 */

function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

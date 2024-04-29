/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/138477
 * 문제 풀이 과정
 * 1. stack의 길이가 k 미만일 때까지는 stack에 넣고 오름차순 정렬 후 첫 번째 인덱스 꺼내기
 * 2. k 이상부터는 score[i]랑 stack의 첫 번째 인덱스 요소랑 비교하기 
 */

function solution(k, score) {
  let answer = [];
  let stack = [];

  for (let i = 0; i < score.length; i++) {
    if (stack.length < k) {
      stack.push(score[i]);
      stack.sort((a, b) => a - b);
      answer.push(stack[0]);
    } else {
      if (score[i] > stack[0]) {
        stack.shift(stack[0]);
        stack.push(score[i]);
      }
      stack.sort((a, b) => a - b);
      answer.push(stack[0]);
    }
  }
  return answer;
}

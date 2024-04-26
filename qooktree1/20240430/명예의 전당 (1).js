/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/138477
 * 문제 풀이 포인트: 스택
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 명예의 전당을 업데이트할 stack 배열을 준비한다.
 * 2. 만약 score를 stack에 push하면서 만약 k개 잉상일 경우 0번째 인덱스를 shift한다.
 * 3. 명예의 전당은 항상 오름차순으로 나열한다.
 * 4. 가수들의 점수는 최하위 점수 즉, stack의 0번째 인덱스들로 구성한다.
 */

const solution = (k, score) => {
  const stack = [];
  const answer = [];
  for (let i = 0; i < score.length; i++) {
    stack.push(score[i]);
    stack.sort((a, b) => a - b);
    if (stack.length > k) stack.shift();
    answer.push(stack[0]);
  }
  return answer;
};

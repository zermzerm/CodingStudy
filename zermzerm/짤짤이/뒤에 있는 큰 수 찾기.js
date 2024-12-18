// https://school.programmers.co.kr/learn/courses/30/lessons/154539
// 뒤에서 부터 찾기?, 스택 사용
function solution(numbers) {
  let maxnum = 0;
  let stack = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (maxnum <= numbers[i]) {
      maxnum = numbers[i];
      answer.push(-1);
      stack = [];
      stack.push(numbers[i]);
    } else {
      let j = 0;
      while (1) {
        if (numbers[i] < stack[j]) {
          answer.push(stack[j]);
          stack.unshift(numbers[i]);
          break;
        } else {
          stack.shift();
        }
      }
    }
  }
  answer.reverse();

  return answer;
}

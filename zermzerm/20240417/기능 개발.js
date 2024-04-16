/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42586
 * 문제 이름 : 종능 개발
 * 문제 풀이 포인트: 완료하는데 필요한 날짜 따로 배열로 만들고, 그거 가지고 for 돌려서 stack의 마지막 애랑 배교해서 cnt 추가
 * 나의 실수:
 */

//다시 스택/큐로 푼 코드
function solution(progresses, speeds) {
  let calc = [];
  let answer = [];
  for (let i = 0; i < progresses.length; i++) {
    calc.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  let stack = [calc[0]];
  for (let i = 1; i < calc.length; i++) {
    if (stack[stack.length - 1] >= calc[i]) stack.unshift(calc[i]);
    else {
      answer.push(stack.length);
      stack = [calc[i]];
    }
    if (i === calc.length - 1) answer.push(stack.length);
  }
  return answer;
}

//맨 처음 푼 코드
// function solution(progresses, speeds) {
//   let calc = [];
//   let answer = [];
//   let cnt = 1;
//   for (let i = 0; i < progresses.length; i++) {
//     calc.push(Math.ceil((100 - progresses[i]) / speeds[i]));
//   }
//   for (let i = 0; i < calc.length; i++) {
//     if (calc[i] >= calc[i + 1]) {
//       cnt++;
//       calc[i + 1] = calc[i];
//     } else if (calc[i] < calc[i + 1]) {
//       answer.push(cnt);
//       cnt = 1;
//       if (calc[i] >= calc[i + 1]) cnt++;
//     }
//     if (i === calc.length - 1) answer.push(cnt);
//   }
//   return answer;
// }

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

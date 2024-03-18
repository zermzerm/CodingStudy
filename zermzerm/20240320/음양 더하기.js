/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/76501
 * 문제 풀이 포인트: for?
 * 나의 실수: x
 */

//다시 푼 코드
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < signs.length; i++) {
    signs[i] === true ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}

//예전에 푼 코드
// function solution(absolutes, signs) {
//   var answer = 0;
//   answer = absolutes.map((el, index) =>
//     signs[index] === true ? (answer += el) : (answer += -el)
//   );
//   return answer[answer.length - 1];
// }

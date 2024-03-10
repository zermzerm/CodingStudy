/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181855
 * 문제 이름: 문자열 묶기
 * 실수 X
 */

function solution(입력) {
  const 길이 = 입력.map((val) => val.length);
  const 길이의_갯수 = {};
  길이.map((val) => (길이의_갯수[val] = (길이의_갯수[val] ?? 0) + 1));
  return Math.max(...Object.values(길이의_갯수));
}

// 옛 버전
// function solution(strArr) {
//   const a = strArr.map((val) => val.length);
//   const result = {};
//   a.forEach((val) => (result[val] = (result[val] || 0) + 1));

//   return Math.max(...Object.values(result));

//   // 실패케이스
//   // for (let i of strArr) {
//   //     answer.push(i.length);
//   //     result.push(answer.sort().map((val) => val === i.length).filter((val) => val).length);
//   // }
//   // return Math.max(...result);
// }

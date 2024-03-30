/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181890
 * 문제 이름 : 왼쪽 오른쪽
 * 문제 풀이 포인트: slice
 * 나의 실수: splice로 풀려다가 실패했다, slice로 했어야됐구나
 */

//다시 답 보고 푼 코드 -> slice를 쓰면 되는구나...
function solution(str_list) {
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === "l") return str_list.slice(0, i);
    if (str_list[i] === "r") return str_list.slice(i + 1);
  }
  return [];
}

//처음 푼 코드 -> 너무 더럽다.
// function solution(str_list) {
//   let larr = [],
//     rarr = [];
//   if (str_list.indexOf("l") < 0 && str_list.indexOf("r") < 0) {
//     return [];
//   }
//   for (let i = 0; i < str_list.length; i++) {
//     if (str_list[i] !== "l" && "r") larr.push(str_list[i]);
//     if (str_list[i] === "l") return larr;
//     if (str_list[i] === "r") {
//       for (let j = i + 1; j < str_list.length; j++) {
//         rarr.push(str_list[j]);
//       }
//       return rarr;
//     }
//   }
// }

console.log(solution(["l"]));

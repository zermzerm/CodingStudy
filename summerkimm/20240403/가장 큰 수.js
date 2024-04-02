/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript
 * 접근 방식
 * - 모든 숫자를 문자열로 변환
 * - 문자열을 더해서 비교한 후 내림차순으로 정렬
 * - 배열을 문자열로 합치기
 * - 배열의 모든 원소가 0일 경우 0으로 리턴
 */

function solution(numbers) {
  let answer = numbers
    .map((number) => number.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

// 첫 번째 시도
// function solution(numbers) {
//   let answer = "";
//   numbers.sort();

//   for (let i = numbers.length - 1; i >= 0; i--) {
//     answer += numbers[i];
//   }
//   return answer;
// }

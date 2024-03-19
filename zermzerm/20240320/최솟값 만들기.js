/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12941
 * 문제 풀이 포인트: 정렬?
 * 나의 실수: X
 */

//다시 푼 코드
function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]));

//전에 푼 코드
// function solution(A, B) {
//   var arrA = [],
//     arrB = [],
//     answer = 0;
//   arrA = A.sort((a, b) => a - b);
//   arrB = B.sort((a, b) => b - a);
//   for (i in arrA) {
//     answer += arrA[i] * arrB[i];
//   }
//   return answer;
// }

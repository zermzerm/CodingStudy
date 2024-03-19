/**
 * URL : https://school.programmers.co.kr/learn/courses/30/lessons/12941
 * 나의 실수 : sort() 개념 부족
 */

// 갓종민 도움 
function solution(A,B){
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  let answer = 0;
  let sum;

  for(let i = 0; i < A.length; i++) {
      sum = A[i] * B[i];
      answer += sum;
  }
  return answer;
}


// 첫 번째 시도 -> 4점
// function solution(A,B){
//   let a = A.sort();
//   let b = B.sort();
//   let answer = 0;
  
//   for(let i = 0; i < A.length; i++) {
//       let sum = A[i] * B[(A.length - 1) - i];
//       answer += sum;
//   }
//   return answer;
// }

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181903
 * 문제 풀이 포인트: for
 * 나의 실수: X
 */

//다시 푼 코드
function solution(q, r, code) {
  var answer = '';
  for (let i = 0; i < code.length; i++) {
    if (i % q === r) {
      answer += code[i];
    }
  }
  return answer;
}

console.log(solution(3, 1, 'qjnwezgrpirldywt'));

//예전에 푼 코드
// function solution(q, r, code) {
//     var answer = '';
//     let arr=code.split("");
//     for(let i=0;i<arr.length;i++){
//         if(i%q===r){
//             answer+=arr[i];
//         }
//     }
//     return answer;
// }

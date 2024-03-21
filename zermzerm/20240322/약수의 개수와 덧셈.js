/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/77884
 * 문제 풀이 포인트: Number.isInteger와 **0.5
 * 나의 실수: X
 */

//reduce 공부 코드
function solution(left, right) {
  return Array.from(Array(right - left + 1), (_, index) => index + left).reduce(
    (acc, cur) => (Number.isInteger(cur ** 0.5) ? acc - cur : acc + cur),
    0
  );
}

//다시 푼 코드
// function solution(left, right) {
//   var answer = 0;
//   for (let i = left; i <= right; i++) {
//     answer += Number.isInteger(i ** 0.5) ? -i : i;
//   }
//   return answer;
// }

console.log(solution(13, 17));

//예전에 푼 코드
// function solution(left, right) {
//     var answer = 0;
//     for(i=left;i<right+1;i++){
//         var cnt = 0;
//         for(j=1;j*j<i+1;j++){
//             if(j*j===i) cnt++;
//             else if(i%j===0) cnt +2;
//         }
//         cnt%2 ===0 ? answer+=i : answer-=i;
//     }
//     return answer;
// }

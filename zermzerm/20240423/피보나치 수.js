/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12945
 * 문제 이름 : 피보나치 수
 * 문제 풀이 포인트: for문 push pop
 * 나의 실수: 너무 큰 수는 계산이 안된다!
 */

//다시 푼 코드
function solution(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push((arr[i - 2] + arr[i - 1]) % 1234567);
  }
  return arr.pop();
}

console.log(solution(5));

//예전에 푼 코드
// function solution(n) {
//   var answer = 0;
//   var arr=[0,1];
//   if(n==0){
//       return 0;
//   }
//   for(i=2;i<n+1;i++){
//       arr.push((arr[i-2]+arr[i-1])%1234567);
//   }
//   return arr[arr.length-1];
// }

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12924
 * 문제 이름 : 숫자의 표현
 * 문제 풀이 포인트: for문 하나로 하기, 범위는 n을 반으로 나눈거의 반올림한거 까지(짜피 이거 넘어가면 하나라도 더하면 넘어가버리기 때문)
 * 나의 실수: 런타임 오류
 */

//다시 푼 코드
function solution(n) {
  let cnt = 1;
  let sum = 0;
  let idx = 1;
  for (let i = 1; i < Math.ceil(n / 1); i++) {
    sum += i;
    if (sum === n) {
      cnt++;
      i = idx;
      idx++;
      sum = 0;
    }
    if (sum > n) {
      i = idx;
      idx++;
      sum = 0;
    }
  }
  return cnt;
}

console.log(solution(15));

//예전에 푼 코드 -> 런타임 에러 났다.
// function solution(n){
//     var arr=[],cnt=0;
//     for(i=1;i<n+1;i++){
//         var a=0;
//         for(j=i;j<n+1;j++){
//             a+=j;
//             if(a===n){
//                 cnt++;
//             }
//             else if(a>n){
//                 break;
//             }
//         }
//     }
//     return cnt;
// }

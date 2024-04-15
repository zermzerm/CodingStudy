/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120884
 * 문제 이름 : 종킨 쿠폰
 * 문제 풀이 포인트: 나눈 몫만큼 서비스 치킨cnt 더하고 몫 + 나머지로 반복하기
 * 나의 실수:
 */

function solution(chicken) {
  let cnt = 0;
  while (chicken >= 10) {
    cnt += Math.floor(chicken / 10);
    chicken = Math.floor(chicken / 10) + (chicken % 10);
  }
  return cnt;
}

console.log(solution(100));

//예전에 푼 코드
// function solution(chicken) {
//     let answer = 0;
//     while(true){
//         let cnt=parseInt(chicken/10);
//         if(cnt===0)break;
//         answer+=cnt;
//         chicken=cnt+(chicken%10);
//     }
//     return answer;
// }

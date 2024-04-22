/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12911
 * 문제 이름 : 다음 큰 숫자
 * 문제 풀이 포인트: 문자열에서 특정 문자가 포함된 개수 === split("특정문자").length-1 를 이용
 * 나의 실수:
 */

//다시 푼 코드
function solution(n) {
  let cnt = n.toString(2).split('1').length - 1;
  while (true) {
    n++;
    let newCnt = n.toString(2).split('1').length - 1;
    if (cnt === newCnt) return n;
  }
}

console.log(solution(78));

//예전에 푼 코드
// function solution(n){
//   var a = n.toString(2);
//   var a2=a.split("");
//   var acnt=a2.filter(v=>'1'===v).length;
//   var b=n;
//   while(true){
//       b+=1;
//       var b2=b.toString(2).split("");
//       var bcnt=b2.filter(v=>'1'===v).length;
//       if(acnt===bcnt){
//           break;
//       }
//   }
//   return b;
// }

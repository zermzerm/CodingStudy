/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/70129
 * 문제 풀이 포인트: replace, while, 정규식(match, replace)
 * 나의 실수: replace는 쓰인 문자열을 반환하지 않고 적용한 복사본을 반환해서 쓰인 문자열은 그대로다.
 */

//런타임 오래 걸리는 것 같아서 다시 다시 푼 코드 -> 훨씬 빨라! 정규식 만세!
function solution(s) {
  let cnt = 0;
  let zeroCnt = 0;
  while (!(s === "1")) {
    if (s.match(/0/g)) zeroCnt += s.match(/0/g).length;
    s = s.replace(/0/g, "").length.toString(2);
    cnt++;
  }
  return [cnt, zeroCnt];
}

//다시 푼 코드
// function solution(s) {
//   let cnt = 0;
//   let zeroCnt = 0;
//   while (!(s === "1")) {
//     while (s.includes("0")) {
//       s = s.replace("0", "");
//       zeroCnt++;
//     }
//     s = s.length.toString(2);
//     cnt++;
//   }
//   return [cnt, zeroCnt];
// }

console.log(solution("1111111"));

//예전에 푼 코드
// function solution(s) {
//     var all_cnt=0,zero_cnt=0;
//     var arr=s.split("");
//     while(true){
//     if(arr.join("")==="1"){
//         break;
//     }
//     all_cnt++;
//     for(i=0;i<arr.length;i++){
//         if(arr[i]==='0'){
//             arr.splice(i,1);
//             i--;
//             zero_cnt++;
//         }
//     }
//     var two=(arr.length).toString(2); //2진법으로 교환
//     arr=two.split("");

//     }
//     return [all_cnt,zero_cnt];
// }

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120864
 * 문제 풀이 포인트: 정규식, reduce
 * 나의 실수: X
 */

//다시 푼 코드
function solution(my_string) {
  return my_string
    .replace(/[a-zA-Z]/g, ',')
    .split(',')
    .reduce((acc, cur) => acc + +cur, 0);
}

console.log(solution('aAb1B2cC34oOp'));

//예전에 다시 푼 코드
// function solution(my_string) {
//   return my_string
//     .split(/[A-z]/g)
//     .filter((el) => el !== '')
//     .reduce((acc, el) => acc + Number(el), 0);
// }

//예전에 푼 코드
// function solution(my_string) {
// let answer = [];
// let ans=0;
// let arr = my_string.split("");
// if(arr.length===1&&!isNaN(Number(arr[0]))){
//     return ans+=Number(arr[0]);
// }
// arr.reduce((acc,el,i)=>{
//     if(!isNaN(Number(el))&&i!==arr.length-1){
//         return acc+el;
//     }
//     else{
//         if(i===arr.length-1&&!isNaN(Number(el))){
//             return answer.push(acc+el);
//         }
//         else{
//             answer.push(acc);
//             return acc='';
//         }
//     }
// },'')
// answer.forEach((el)=>ans+=Number(el));
// return Number(ans);
// }

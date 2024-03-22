/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12973
 * 문제 풀이 포인트: push pop 스택
 * 나의 실수: for i iof s 보다 for let i ~~으로 하는게 효율성이 뛰어나다.
 */

//다시 푼 코드
function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr[arr.length - 1] === s[i] ? arr.pop() : arr.push(s[i]);
  }
  return arr.length === 0 ? 1 : 0;
}

// console.log(solution('baabaa'));

//예전에 푼 코드 -> 효율성 불합격
// function solution(s) {
//   if (s.length < 2) {
//     return 0;
//   }
//   var arr = s.split('');
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i - 1] === arr[i]) {
//       arr.splice(i - 1, 1);
//       arr.splice(i - 1, 1);
//       i -= 2;
//     }
//   }
//   if (arr.length > 0) {
//     return 0;
//   } else if (arr.length === 0) {
//     return 1;
//   }
// }

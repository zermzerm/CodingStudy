/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12909
 * 문제 풀이 포인트: '(' 개수와 ')'개수 뺀 값
 * 나의 실수: X, 더 나은 방법이 뭘까
 */

//다시 푼 코드
function solution(s) {
  let 배열종민 = s.split('');
  let 개수종민 = 0;
  if (배열종민[0] === ')') return false;
  for (let i = 0; i < 배열종민.length; i++) {
    배열종민[i] === '(' ? 개수종민++ : 개수종민--;
    if (개수종민 < 0) return false;
  }
  if (개수종민 === 0) return true;
  else return false;
}

//옛날에 푼 코드
// function solution(s) {
//   var acnt = 0,
//     bcnt = 0,
//     answer = true;
//   if (s[0] == ')') {
//     return !answer;
//   }
//   for (i in s) {
//     if (s[i] === '(') {
//       acnt += 1;
//     } else {
//       bcnt += 1;
//       if (acnt < bcnt) {
//         return !answer;
//       }
//     }
//   }
//   return (answer = acnt == bcnt ? answer : !answer);
// }

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12951
 * 문제 풀이 포인트:
 * 나의 실수: 런타임 에러
 */

//다시 푼 코드
function solution(s) {
  let answer = '';
  return answer;
}

//런타임 에러 코드
// function solution(s) {
//   let arr = s.split(' ');
//   let answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     answer.push(
//       isNaN(arr[i][0])
//         ? arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()
//         : arr[i][0] + arr[i].slice(1).toLowerCase()
//     );
//   }
//   return answer.join(' ');
// }

//옛날에 푼 코드
// function solution(s) {
//   var answer = '';
//   var answer2 = '';
//   var arr = s.split(' ');
//   var arr2 = [];
//   for (i = 0; i < arr.length; i++) {
//     let firstchar = arr[i].charAt(0);
//     if (firstchar != firstchar.toUpperCase()) {
//       firstchar = firstchar.toUpperCase();
//     }
//     arr2.push(firstchar);
//     for (let x of arr[i]) {
//       if (x === x.toUpperCase()) {
//         answer += x.toLowerCase();
//       } else {
//         answer += x;
//       }
//     }
//     answer += ' ';
//   }
//   arr = answer.split(' ');
//   for (i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i].slice(1);
//     arr[i] = arr2[i] + arr[i];
//     answer2 += arr[i] + ' ';
//   }
//   answer2 = answer2.slice(0, -1);
//   return answer2;
// }

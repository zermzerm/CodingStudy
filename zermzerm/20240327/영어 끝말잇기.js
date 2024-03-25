/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12981
 * 문제 풀이 포인트: 문제 이해와 if
 * 나의 실수:
 */

const solution = (n, words) => {
  let member = 2;
  let cnt = 1;
  let arr = [words[0]];
  for (let i = 1; i < words.length; i++) {
    if (arr.includes(words[i])) return [member, cnt];
    else arr.push(words[i]);
    if (words[i][0] !== words[i - 1][words[i - 1].length - 1])
      return [member, cnt];
    member++;
    if (member > n) {
      member = 1;
      cnt++;
    }
  }
  return [0, 0];
};

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);

//예전에 풀고 실패한 코드
// function solution(n, words) {
//     var answer = [];
//     var cnt = 1;
//     for (i = 0; i < words.length; i++) {
//       if (i + 1 > 1 && (i + 1) % n == 1) {
//         cnt++;
//       }
//       if (i > 0) {
//         for (j = 0; j < i; j++) {
//           if (words[i] == words[j]) {
//             var who = 0;
//             who = (i + 1) % n;
//             if (who == 0) {
//               who = n;
//             }
//             answer.push(who, cnt);
//             return answer;
//           }
//         }
//       }
//       if (i == words.length - 1) {
//         return [0, 0];
//         break;
//       }
//       if (words[i].slice(-1) != words[i + 1][0]) {
//         var who = 0;
//         who = (i + 2) % n;
//         if (who == 0) {
//           who = n;
//         }
//         answer.push(who, cnt);
//         return answer;
//       }
//     }
//   }

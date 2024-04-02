/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
 */

function solution(array, commands) {
  let answer = [];

  for (let z = 0; z < commands.length; z++) {
    let [i, j, k] = commands[z];
    let arr = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(arr[k - 1]);
  }
  return answer;
}

// 이전 풀이 코드
// function solution(array, commands) {
//   var answer = [];

//   // commands 의 i,j,k
//   for (let i = 0; i < commands.length; i++) {
//     let temp = array.slice(commands[i][0] - 1, commands[i][1]);
//     // 오름차순 정렬
//     temp.sort((a, b) => a - b);
//     answer.push(temp[commands[i][2] - 1]);
//   }
//   return answer;
// }

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
 * 접근 방식
 * - commands 각각 배열 원소를 돌아야 하므로 for문 사용
 * - 구조 분해 할당을 통해 해당 배열을 각각 i, k, j에 대입 
 * - array의 i번째 숫자부터 j번쨰 숫자까지 자르는데, 단 인덱스가 1부터 시작하므로 slice 첫 번째 원소에 -1
 * - 오름차순으로 정렬: sort() 
 * - 해당 원소를 새로운 배열에 담아 return! 
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

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12930
 * 문제 풀이 포인트 : 이중 for문
 */

function solution(s) {
  let answer = [];
  let arr = s.toUpperCase().split(" ");
  for (let i = 0; i < arr.length; i++) {
    let word = "";
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 !== 0) {
        word += arr[i][j].toLowerCase();
      } else {
        word += arr[i][j];
      }
    }
    answer.push(word);
  }
  return answer.join(" ");
}

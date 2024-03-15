/**
 * URL : https://school.programmers.co.kr/learn/courses/30/lessons/12950
 * 문제 풀이 포인트: 이중 for문
 * 나의 실수 : 문제 이해부터 못했음~
 */

function solution(arr1, arr2) {
  let answer = [];
  for(let i = 0; i < arr1.length; i++) {
      let array = [];
      for(let j = 0; j < arr1[i].length; j++) {
          array.push(arr1[i][j] + arr2[i][j]);
      }
      answer.push(array);
  }
  return answer;
}

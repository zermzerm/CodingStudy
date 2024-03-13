/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12950
 * 문제 풀이 포인트: for와 for와 for와 for
 * 나의 실수: for좀 그만쓰고 map으로 생각해 보자
 */

function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    arr = [];
    for (let j = 0; j < arr1[i].length; j++) {
      arr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(arr);
  }
  return answer;
}

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181857
 * 문제 풀이 포인트 : Math.pow(), 배열 합치기
 */

function solution(arr) {
  let a = 0;
  while (Math.pow(2, a) < arr.length) {
    a++;
  }

  let fillNum = Math.pow(2, a) - arr.length;
  let newArr = Array(fillNum).fill(0);

  return [...arr, ...newArr];
}

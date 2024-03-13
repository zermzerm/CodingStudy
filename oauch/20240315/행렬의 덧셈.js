/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12950
 * 문제 이름 : 행렬의 덧셈
 * 문제점 : 빈 배열을 생성하는 방법을 몰라서 구글링을 했다 🥹 ES6에서 가능한 문법이라고 한다
 */

function solution(arr1, arr2) {
  const array = Array.from(Array(arr1.length), () => new Array(arr1[0].length));
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      array[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return array;
}

/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181857
 * 문제 이름 : 배열의 길이를 2의 거듭제곱으로 만들기
 */

const ex = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

function check2(num) {
  return ex.filter((val) => num === val).length;
}

function solution(arr) {
  if (check2(arr.length) > 0) return arr;
  const minLength = ex.filter((val) => val > arr.length)[0] - arr.length;
  for (let i = 0; i < minLength; i++) {
    arr.push(0);
  }
  return arr;
}

/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/77884
 * 문제 이름 : 약수의 개수와 덧셈
 */

function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    let array = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) array.push(j);
    }
    array.length % 2 === 0 ? (result += i) : (result -= i);
  }
  return result;
}

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/76501
 */

function solution(absolutes, signs) {
  let arr = [];

  for (let i in signs) {
    if (signs[i] === true) {
      arr.push(absolutes[i]);
    } else {
      arr.push(-1 * absolutes[i]);
    }
  }

  let sum = 0;
  arr.forEach((el) => (sum += el));
  return sum;
}

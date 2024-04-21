/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120921
 */
function solution(A, B) {
  let arr = [...A];

  for (let i = 0; i < A.length; i++) {
    if (A === B) {
      return i;
    } else {
      arr.unshift(arr.pop());

      if (arr.join("") === B) return i + 1;
    }
  }
  return -1;
}

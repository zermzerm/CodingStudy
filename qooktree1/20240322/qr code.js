/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181903
 * 문제 풀이 포인트: map method
 * 나의 실수: 한 줄로 더 이상 풀지 말아야겠다. 가독성이 너무 떨어진다.
 */

const solution = (q, r, codes) =>
  codes
    .split("")
    .map((code, idx) => (idx % q === r ? codes[idx] : ""))
    .join("");

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12930
 * 문제 풀이 포인트: map
 * 나의 실수: X
 */

const solution = (s) => {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((c, idx) => (idx % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
        .join("")
    )
    .join(" ");
};

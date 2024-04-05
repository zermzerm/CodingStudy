/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120860
 * 문제 이름 :
 * 문제 풀이 포인트:
 * 나의 실수:
 */

function solution(dots) {
  const arr = dots.map((v) => [...v]);
  let width = arr.sort((a, b) => b[0] - a[0]);
  let height = arr.sort((a, b) => b[1] - a[1]);
  return (width[0][0] - width.at(-1)[0]) * (height[0][1] - height.at(-1)[1]);
}

console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120860
 * 문제 이름 : 직사각형 넓이 구하기
 * 문제 풀이 포인트: 2차원 배열 깊은 복사해서 제일 큰 [0] 과 제일 작은[0] 빼면 가로의 길이 나오고 같은 방식으로 [1] 하면 세로 길이 나와서 곱해준다.
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

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/86491
 * 문제 이름 : 최소직사각형
 * 문제 풀이 포인트:
 * 나의 실수:
 */

const solution = (sizes) => {
  const arr = sizes.map((el) => el.sort((a, b) => b - a));
  return (
    arr.sort((a, b) => b[0] - a[0])[0][0] *
    arr.sort((a, b) => b[1] - a[1])[0][1]
  );
};

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120868
 * 문제 이름 : 삼각형의 완성조건 (2)
 * 문제 풀이 포인트: for
 * 나의 실수: 풀긴 풀었는데 계산이 머리에서 안돌아간다...
 */

const solution = (sides) => {
  const arr = sides.sort((a, b) => a - b);
  let cnt = 0;
  for (let i = arr[1] - arr[0] + 1; i <= arr[1]; i++) {
    cnt++;
  }
  for (let i = arr[1] + arr[0] - 1; i > arr[1]; i--) {
    cnt++;
  }
  return cnt;
};

console.log(solution([2, 2]));

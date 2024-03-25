/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120843
 * 문제 풀이 포인트: 알고리즘
 * 나의 실수: 더 나은 방법이 있지 않을까?, 너무 머리가 안굴러간다...
 */

const solution = (numbers, k) => {
  let cnt = 1;
  let index = 0;
  while (cnt !== k) {
    cnt++;
    if (index === numbers.length - 2) index = 0;
    else if (index > numbers.length - 2) index = 1;
    else index += 2;
  }
  return numbers[index];
};

console.log(solution([1, 2, 3, 4, 5, 6], 5));

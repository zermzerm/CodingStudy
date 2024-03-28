/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/1845
 * 문제 풀이 포인트: Set(), reduce
 * 나의 실수:
 */

const solution = (nums) =>
  [...new Set(nums)].reduce(
    (acc, _, idx) => (idx + 1 <= nums.length / 2 ? acc + 1 : acc),
    0
  );

console.log(solution([3, 3, 1, 2]));

/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/1845
 * 문제 이름 : 폰켓몬
 */

function solution(nums) {
  const delDuplicate = new Set(nums);
  return nums.length / 2 < delDuplicate.size
    ? nums.length / 2
    : delDuplicate.size;
}

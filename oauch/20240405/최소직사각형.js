/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/86491
 * 종민's 풀이법으로 했습니다
 */

function solution(sizes) {
  let maxWidth = 0,
    maxHeight = 0;
  for (size of sizes) {
    maxWidth = Math.max(maxWidth, Math.max(size[0], size[1]));
    maxHeight = Math.max(maxHeight, Math.min(size[0], size[1]));
  }
  return maxWidth * maxHeight;
}

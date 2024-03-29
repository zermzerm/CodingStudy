/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/1845
 * 문제 풀이 포인트: 해시, N/2 개수와 포켓몬의 종류를 비교하여 작은 값 도출
 * 나의 실수: X
 */

const solution = (nums) => Math.min(nums.length / 2, new Set(nums).size);

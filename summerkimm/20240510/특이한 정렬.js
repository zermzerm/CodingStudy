/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120880
 */

function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [A, B] = [Math.abs(n - a), Math.abs(n - b)];
    if (A === B) return b - a;
    return A - B;
  });
}

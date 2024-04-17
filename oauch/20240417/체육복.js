/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/42862
 * 문제 이름 : 체육복
 */
function solution(n, lost, reserve) {
  const realLost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b);
  const realReserve = reserve
    .filter((student) => !lost.includes(student))
    .sort((a, b) => a - b);

  let count = n - realLost.length;

  for (let student of realLost) {
    if (
      realReserve.includes(student - 1) ||
      realReserve.includes(student + 1)
    ) {
      realReserve.shift();
      count++;
    }
  }

  return count;
}

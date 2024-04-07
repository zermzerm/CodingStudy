/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/86491
 */

function solution(sizes) {
  let big = [];
  let small = [];

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      big.push(sizes[i][0]);
      small.push(sizes[i][1]);
    } else {
      big.push(sizes[i][1]);
      small.push(sizes[i][0]);
    }
  }
  let Max = Math.max(...big);
  let Min = Math.max(...small);

  return Max * Min;
}

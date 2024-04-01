/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/42578
 * 문제 이름 : 의상
 */

function solution(clothes) {
  let count = 1;
  const result = new Map();

  clothes.map((val) =>
    result.has(val[1])
      ? result.set(val[1], result.get(val[1]) + 1)
      : result.set(val[1], 1)
  );

  for (let [key, val] of result) {
    count *= val + 1;
  }

  return count - 1;
}
// 잔머리 케이스
// function solution(clothes) {
//   const result = new Map();
//   clothes.map((val) => result.set(val[1], val[0]));
//   return result.size * 2 + 1;
// }

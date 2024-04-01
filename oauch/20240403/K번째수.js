/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/42748
 * 문제 이름 : K번째수
 */

function solution(array, commands) {
  const result = [];
  for (i of commands) {
    const slice = array.slice(i[0] - 1, i[1]);
    const sort = slice.sort((a, b) => a - b);
    result.push(sort[i[2] - 1]);
  }
  return result;
}

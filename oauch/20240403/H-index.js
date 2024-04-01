/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/42747
 * 문제 이름 : H-Index
 */

function solution(citations) {
  let i = 0;
  const sort = citations.sort((a, b) => b - a);
  while (i + 1 <= sort[i]) {
    i++;
  }
  return i;
}

/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181851
 * 문제 이름 : 전국 대회 선발 고사
 */

function solution(rank, attendance) {
  const result = [];
  for (let i = 0; i < rank.length; i++) {
    if (attendance[i] === true) result.push(rank[i]);
  }
  const [a, b, c] = result
    .sort((a, b) => a - b)
    .map((val) => rank.indexOf(val))
    .slice(0, 3);
  return 10000 * a + 100 * b + c;
}

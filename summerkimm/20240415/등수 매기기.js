/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120882
 */

function solution(score) {
  // 평균 구하기
  let average = score.map((val) => (val[0] + val[1]) / 2);

  // 등수 매기기
  let rank = [...average].sort((a, b) => b - a);

  // 두 배열 비교하기
  return average.map((val) => rank.indexOf(val) + 1);
}

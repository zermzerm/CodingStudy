/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120882
 * 문제 이름 : 등수 매기기
 */

// 처음 생각한 풀이
function solution(score) {
  const result = [];
  const avg = score.map(([a, b]) => (a + b) / 2);

  for (let i = 0; i < avg.length; i++) {
    let rank = 1;
    for (let j = 0; j < avg.length; j++) {
      if (avg[i] < avg[j]) {
        rank++;
      }
    }
    result.push(rank);
  }
  return result;
}

// 간단한 풀이
function solution(score) {
  const avg = score.map((val) => (val[0] + val[1]) / 2);
  const sorted = [...avg].sort((a, b) => b - a);
  return avg.map((val) => sorted.indexOf(val) + 1);
}

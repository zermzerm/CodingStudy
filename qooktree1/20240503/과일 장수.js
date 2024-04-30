/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/135808
 * 문제 풀이 포인트: 내림차순
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 내림차순을 이용하여 최대 사과들의 점수를 구한다.
 * 2. for문의 종료조건을 조절하여 m개로 나누어 떨어질 때까지 반복문을 돌린다.
 */

const solution = (k, m, score) => {
  let answer = 0;
  score.sort((a, b) => b - a);
  for (let i = 0; i < Math.floor(score.length / m); i++) {
    answer += score[i * m + m - 1] * m;
  }
  return answer;
};

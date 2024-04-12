/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120882
 * 문제 풀이 포인트: indexOf, 구현
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 영어 점수와 수학 점수를 합한 점수들로 이루어진 새로운 배열 sumScores를 구한다.
 * 2. 새로운 내림차순으로 정렬된 sortedSumScores를 구한다. (단, sort는 이전 배열에 영향이 가므로 slice를 통해 1차원 배열 복사를 해준다.)
 * 3. 다음 sumScores를 map method로 확인하며 srotedSumScores의 인덱스를 구한 후 + 1을 해준다.
 * 3-1. indexOf는 가장 앞에는 인덱스를 확인하므로 같은 숫자면 등수가 똑같게 나온다.
 */

const solution = (scores) => {
  const sumScores = scores.map((score) => score[0] + score[1]);
  const sortedSumScores = sumScores.slice().sort((a, b) => b - a);
  return sumScores.map((score) => sortedSumScores.indexOf(score) + 1);
};

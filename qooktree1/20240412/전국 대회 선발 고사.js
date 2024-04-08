/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181851
 * 문제 풀이 포인트: X0
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 출석한 학생들의 성적과 참가번호로 이루어진 새로운 배열을 구한다.
 * 2. 성적 순으로 정렬한다.
 * 3. 앞의 3명의 학생 번호를 사용하여 답을 구한다.
 */

const solution = (rank, attendance) => {
  const availableRank = rank
    .map((r, idx) => {
      if (attendance[idx]) return [r, idx];
    })
    .filter((x) => x)
    .sort((a, b) => a[0] - b[0]);
  return (
    10000 * availableRank[0][1] +
    100 * availableRank[1][1] +
    availableRank[2][1]
  );
};

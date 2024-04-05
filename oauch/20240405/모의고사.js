/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/42840
 * 문제 이름 : 모의고사
 * 문제 풀이 실패... 답 보면서 이해하는 식으로 했습니다
 */

const man1 = [1, 2, 3, 4, 5];
const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

function solution(answers) {
  let answer = [];
  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === man1[i % man1.length]) score[0]++;
    if (answers[i] === man2[i % man2.length]) score[1]++;
    if (answers[i] === man3[i % man3.length]) score[2]++;
  }

  const max = Math.max(...score);

  for (let i = 0; i < score.length; i++) {
    if (max === score[i]) answer.push(i + 1);
  }

  return answer;
}

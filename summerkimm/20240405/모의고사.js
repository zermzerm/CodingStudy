/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42840
 * 다시 풀기~
 */

function solution(answers) {
  let answer = [];
  const s1 = [1, 2, 3, 4, 5];
  const s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let s1c = answers.filter((a, i) => a === s1[i % s1.length]).length;
  let s2c = answers.filter((a, i) => a === s2[i % s2.length]).length;
  let s3c = answers.filter((a, i) => a === s3[i % s3.length]).length;
  let max = Math.max(s1c, s2c, s3c);

  if (s1c === max) {
    answer.push(1);
  }
  if (s2c === max) {
    answer.push(2);
  }
  if (s3c === max) {
    answer.push(3);
  }

  return answer;
}

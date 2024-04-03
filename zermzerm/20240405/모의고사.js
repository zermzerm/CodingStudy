/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42840
 * 문제 이름 : 모의고사
 * 문제 풀이 포인트: for 만세
 * 나의 실수:
 */

const one = [1, 2, 3, 4, 5];
const two = [2, 1, 2, 3, 2, 4, 2, 5];
const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

const compare = (answers, arr, cnt, k) => {
  for (let i = 0; i < answers.length; i++) {
    let j = i % arr.length;
    if (answers[i] === arr[j]) cnt[k]++;
  }
};

const solution = (answers) => {
  const cnt = [0, 0, 0];
  const answer = [];
  compare(answers, one, cnt, 0);
  compare(answers, two, cnt, 1);
  compare(answers, three, cnt, 2);
  let max = Math.max(...cnt);
  for (let i = 0; i < cnt.length; i++) {
    if (cnt[i] === max) answer.push(i + 1);
  }
  return answer;
};

console.log(solution([1, 2, 3, 4, 5]));

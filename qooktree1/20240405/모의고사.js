/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42840
 * 문제 풀이 포인트: 해시, 나머지 연산
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 1,2,3번 수포자가 찍는 방식들 중 반복되는 구간을 정리하여 2차원 배열로 정리한다. (SOLUTION_METHOD)
 * 2. 1,2,3번 수포자가 맞은 개수를 기록할 객체를 생성한다. (PERSON)
 * 3. 문제들의 개수만큼 반복문을 돌리면서 각 수포자의 찍었던 숫자와 정답을 비교해서 같으면 수포자가 맞은 개수를 기록할 객체에 + 1 을 해준다.
 * 3-1. SOLUTION_METHOD의 각 인자의 길이는 각각 다른데 나머지 연산자를 사용하여 문제의 개수가 인자의 길이들을 초과하더라도 인덱싱을 할 수 있게 해준다.
 * 4. PERSON 객체에서 가장 문제를 많이 맞은 개수를 구한다. (maxScore)
 * 5. PERSON 객체를 탐색하면서 maxScore과 같은 점수인 수포자의 번호를 구한다.
 * 5-1. filter를 통해 falsy 갑을 제거해준다.
 * 5-2. sort를 통해 오름차순 정렬을 해준다.
 */

const SOLUTION_METHOD = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

const PERSON = { 1: 0, 2: 0, 3: 0 };

const solution = (answers) => {
  let answersLen = answers.length;
  for (let i = 0; i < answersLen; i++) {
    if (SOLUTION_METHOD[0][i % 5] === answers[i]) PERSON["1"]++;
    if (SOLUTION_METHOD[1][i % 8] === answers[i]) PERSON["2"]++;
    if (SOLUTION_METHOD[2][i % 10] === answers[i]) PERSON["3"]++;
  }
  const maxScore = Math.max(...Object.values(PERSON));
  return Object.entries(PERSON)
    .map(([person, score]) => maxScore === score && +person)
    .filter((x) => x)
    .sort();
};

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/142086
 * 문제 풀이 포인트: 딕셔너리(객체) 이용
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. s의 길이만큼 반복문을 돌면서 만약 cDict 객체에 알파벳이 없으면 answer 에 -1를 push한다.
 * 2. 만약 있다면 현재 인덱스에서 cDict에 기록된 인덱스를 뺀 값을 push한다.
 * 3. 항상 cDict의 알파벳은 현재 인덱스로 설정한다.
 */

const solution = (s) => {
  const cDict = {};
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    answer.push(cDict[s[i]] === undefined ? -1 : i - cDict[s[i]]);
    cDict[s[i]] = i;
  }
  return answer;
};

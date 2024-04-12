/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181851
 * 문제 풀이 과정
 * 1. 1등부터 순서대로 해당 인덱스 찾기
 * 2. 배열 attendance에 찾은 인덱스 값을 넣어서 true or false 찾고 true이면 배열에 넣기
 * 3. a, b, c에 맞춰 구조분해할당 (arr.length 값이 3개를 넘어도 상관 X)
 * 4. 제시된 식에 대입하기
 */

function solution(rank, attendance) {
  let arr = [];

  for (let i = 1; i <= rank.length; i++) {
    let index = rank.indexOf(i);
    attendance[index] && arr.push(index);
  }
  const [a, b, c] = arr;
  return 10000 * a + 100 * b + c;
}

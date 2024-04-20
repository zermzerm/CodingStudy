/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181921
 * 문제 이름 : 배열 만들기
 * 문제 풀이 포인트: match(정규식)
 * 나의 실수: 정규식 한동안 안쓰니까 까먹었었다.
 */

function solution(l, r) {
  const answer = [];
  for (let i = l; i <= r; i++) {
    if (!String(i).match(/[1,2,3,4,6,7,8,9]/g)) {
      answer.push(i);
    }
  }
  return answer.length ? answer : [-1];
}

console.log(solution(5, 55));

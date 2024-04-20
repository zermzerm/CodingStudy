/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120921
 * 문제 이름 : 문자열 밀기
 * 문제 풀이 포인트: slice 활용
 * 나의 실수: slice 활용법 맨날 까먹음, 횟수를 반환하는 거였! 문제 제대로 안읽음
 */

const solution = (A, B) => {
  if (A === B) return 0;
  let tmpStr = "";
  for (let i = 1; i < A.length; i++) {
    tmpStr = A.slice(-i) + A.slice(0, -i);
    if (B === tmpStr) return i;
  }
  return -1;
};

console.log(solution("hello", "ohell"));

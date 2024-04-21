/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120921
 * 문제 이름 : 문자열 밀기
 * 충격의 도가니탕 풀이법도 존재했다..
 */

function solution(A, B) {
  if (A === B) return 0;
  let count = 0;
  const a = [...A];
  const b = [...B];
  while (a.join("") !== B) {
    a.unshift(a.pop());
    count++;
    if (count >= a.length) return -1;
  }
  return count;
}

/**
 * 접근 방법
 * A : hello    B : ohell
 * ohellohell B 두개를 더하면 옆으로 밀었는지 안 밀었는지 알 수 있음
 * 그래서 indexOf를 이용해서 A가 포함된 곳 맨 처음인 index = 1 반환해줌, 그렇지 않으면 -1 반환
 */

function solution(A, B) {
  return (B + B).indexOf(A);
}

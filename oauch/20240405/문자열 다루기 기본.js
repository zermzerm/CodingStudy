/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12918
 * 문제 이름 : 문자열 다루기
 */

// 1. 숫자로 구성되어 있는 것을 빈 문자열로 만든다.
// 2. 길이가 0인지 확인한다.
// 3. 그리고 문자열의 길이가 4나 6인지 확인한다.

function solution(s) {
  return (
    s.replace(/[0-9]/g, "").length === 0 && (s.length === 4 || s.length === 6)
  );
}

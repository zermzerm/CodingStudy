/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12951
 * 문제 이름 : JadenCase 문자열 만들기
 * 문제점 : 인덱스롤 접근하니까 런타입 에러가 발생했다.
 * 그래서 charAt(index)로 index에 위치한 문자를 읽는 함수를 사용
 */

function solution(s) {
  return s
    .split(" ")
    .map((val) => val.charAt(0).toUpperCase() + val.slice(1).toLowerCase())
    .join(" ");
}

/** 처음 시도해서 실패한 케이스
 * 문제점 : 런타임 에러
  function solution(s) {
   return s
     .split(" ")
    .map((val) => val[0].toUpperCase() + val.slice(1).toLowerCase())
    .join(" ");
}
*/

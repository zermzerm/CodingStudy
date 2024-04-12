/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181943
 * 문제 풀이 포인트: slice method
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. slice method를 사용해서 인덱스 s를 기준으로 myString을 slicing 한다.
 * 2. slicing 한 두 문자열 사이에 overwriteString을 배치한다.
 */

const solution = (myString, overwriteString, s) =>
  myString.slice(0, s) +
  overwriteString +
  myString.slice(overwriteString.length + s);

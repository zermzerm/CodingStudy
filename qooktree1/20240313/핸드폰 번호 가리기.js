/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12948
 * 문제 풀이 포인트: 문자열 반복 함수 repeat
 * 나의 실수: repeat 이라는 문법을 알게 되었습니다.
 */

const solution = (phoneNumber) =>
  "*".repeat(phoneNumber.length - 4) + phoneNumber.slice(-4);

/** 첫 시도
 * const solution = phoneNumber => new Array(phoneNumber.length - 4).fill('*').join('') + phoneNumber.slice(phoneNumber.length - 4)
 */

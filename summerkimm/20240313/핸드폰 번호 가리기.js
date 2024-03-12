/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12948
 * 문제 풀이 포인트: repeat(), slice(), 풀었던 문제임에도 헤맸음 
 */

function solution(phone_number) {
  let answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
  return answer;
}

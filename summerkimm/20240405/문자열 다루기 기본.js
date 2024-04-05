/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12918
 * 문제 풀이 과정
 * 1. 길이가 조건에 맞지 않는 경우 false로 리턴
 * 2. for 문으로 문자열 돌면서 number가 아니면 false 리턴 
 */

function solution(s) {

//   if (s.length !== 4 || s.length !== 6) { // 안 되는 이유????
  if (!(s.length === 4 || s.length === 6)) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      return false;
    }
  }
  return true;
}

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/86051
 * 문제 풀이 포인트: for문, includes() 활용
 * 나의 실수: X
 */

function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
      if(!numbers.includes(i)) {
          answer += i;
      } 
  }
  return answer;
}

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript
 * 문제 이름 : 가장 큰 수
 * 문제 풀이 포인트: sort() 함수
 * 나의 실수: 종민님께 도움 받아서 풀긴 풀었는데 이해가 안간다..., 0일때 고려를 못했다...
 */

function solution(numbers) {
  const answer = numbers
    .sort((a, b) => String(b) + String(a) - (String(a) + String(b)))
    .join('');
  return +answer === 0 ? '0' : answer;
}

console.log(solution([0, 0, 0]));

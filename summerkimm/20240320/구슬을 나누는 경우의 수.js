/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120840
 * 배운 지식 : 재귀함수, 팩토리얼
 */

// 윤혁님 코드 참고
function factorial(num) {
  return num === 0 ? 1 : num * factorial(num - 1);
}

function solution(balls, share) {
  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
}

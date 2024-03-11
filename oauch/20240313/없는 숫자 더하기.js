/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/86051
 * 문제 이름 : 없는 숫자 더하기
 * 접근 방법
 * 1. 0 ~ 9에 관한 for문
 * 2. numbers와 0 ~ 9까지 for문의 값이 같으면 result 더하기
 * 3. 전체 0 ~ 9까지 총합 45 - result 빼기
 */

function solution(numbers) {
  let result = 0;
  for (let i = 0; i <= 9; i++) {
    numbers.map((val) => {
      if (val === i) result += i;
    });
  }
  return 45 - result;
}

/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12941
 * 문제 이름 : 최솟값 만들기
 */

function solution(A, B) {
  let result = 0;

  // 하나의 배열은 오름차순, 다른 하나의 배열은 내림차순으로 정렬 (어떤 거를 해도 상관은 없음)
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  // 해당 배열들을 순서대로 곱하여 result 값에 누적
  A.map((_, index) => (result += A[index] * B[index]));

  return result;
}

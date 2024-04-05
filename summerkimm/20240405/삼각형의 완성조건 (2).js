/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42840
 * 풀이 과정
 * 1. 배열 sides의 각 원소를 a, b라고 지정했을 때
 * 2. 나머지 한 변이 될 수 있는 범위 : a - b < X < a + b (단, a > b)
 * 3. X의 개수 구하기 : a + b - (a - b) = 2b - 1
 * 4. b는 두 개의 원소 중 작은 것이기 때문에 sides 배열에 Math.min()을 사용해서 작은 것을 구하고, 거기서 1을 뺀다.
 */
function solution(sides) {
  return (short = Math.min(...sides) * 2 - 1);
}

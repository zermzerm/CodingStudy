/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/86491
 * 문제 풀이 포인트: 큰 수를 0번째 인덱스로 정렬하여 가장 큰 수끼리 곱하는 방식을 사용했다.
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 최대 가로 길이와 최대 세로 길이를 초기화 시켜준다.
 * 2. 반복문을 사용하여 각 명함의 가로와 세로 길이를 받는다.
 * 3. 각 명함의 가로, 세로 중 큰 값은 maxWidth에 작은 값은 maxHeight로 분류한다.
 * 4. 가장 큰 값이 필요하기 때문에 Math.max method를 사용한다.
 */

const solution = (sizes) => {
  let maxWidth = 0,
    maxHeight = 0;
  for (const size of sizes) {
    maxWidth = Math.max(maxWidth, Math.max(size[0], size[1]));
    maxHeight = Math.max(maxHeight, Math.min(size[0], size[1]));
  }
  return maxWidth * maxHeight;
};

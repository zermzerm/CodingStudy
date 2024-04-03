/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120868
 * 문제 이름 : 삼각형의 완성조건 (2)
 */

// 1. 카운트할 변수를 만든다.
// 2. 배열에서 가장 큰 수를 뽑고, 작은 수 + x > 큰 수 경우, 큰 수까지 반복 및 카운트
// 3. 배열에서 두 수를 더한 값, 가장 큰수 + 1 > 배열의 두개의 값 (x, y)까지 반복 및 카운트
function solution(sides) {
  let count = 1;
  const sortSides = sides.sort((a, b) => a - b);
  const minNum = sortSides[0];
  const maxNum = sortSides[1];
  for (let i = 0; i < maxNum; i++) {
    if (i + minNum > maxNum) count++;
  }
  for (let i = maxNum + 1; i < minNum + maxNum; i++) {
    count++;
  }

  return count;
}

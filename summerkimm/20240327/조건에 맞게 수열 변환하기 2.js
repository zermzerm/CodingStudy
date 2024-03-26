/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181881
 * 문제 풀이 포인트: every()
 * 다시 풀기!
 */
function solution(arr) {
  let index = 0;
  let prevArr = arr;

  while (true) {
    // 현재 배열을 조건에 맞게 변환
    const changedArr = prevArr.map((a) => {
      if (a >= 50 && a % 2 === 0) return a / 2;
      if (a < 50 && a % 2 === 1) return a * 2 + 1;
      return a;
    });
    // 이전의 모든 배열과 현재 모든 배열의 요소 비교
    const isAllSame = prevArr.every((a, i) => a === changedArr[i]);
    if (isAllSame) break;
    index++;

    // 현재 배열을 이전 배열 변수에 저장함
    prevArr = changedArr;
  }

  return index;
}

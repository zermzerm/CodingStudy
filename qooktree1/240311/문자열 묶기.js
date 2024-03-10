/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181855
 * 문제 이름: 문자열 묶기
 * 문제 풀이 포인트: 해시
 * 나의 실수: 처음에 쓸데없이 for문을 두 번 사용했습니다.
 */

const solution = (strArr) => {
  const strObj = {};
  let maxGroupSize = 0;

  for (const str of strArr) {
    const strLen = str.length;
    strObj[strLen] = (strObj[strLen] ?? 0) + 1;
    maxGroupSize = Math.max(maxGroupSize, strObj[strLen]);
  }

  return maxGroupSize;
};

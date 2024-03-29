/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42578
 * 문제 풀이 포인트: 부분집합의 경우의 수 구하기
 * 나의 실수: 부분집합의 경우의 수 구하는 방법을 까먹고 있었다.
 */

const solution = (clothes) => {
  const clothMap = {};
  for (const cloth of clothes) {
    clothMap[cloth[1]] = (clothMap[cloth[1]] || 0) + 1;
  }
  return Object.values(clothMap).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
};

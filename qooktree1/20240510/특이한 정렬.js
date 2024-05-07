/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120880
 * 문제 풀이 포인트: sort method
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. n과의 거리를 비교하여 절대값이 더 작은 순으로 정렬한다.
 * 2. 만약 1번 과정에서 결과가 0이 나온다면 n과의 거리가 같은 경우이기 때문에 내림차순한다.
 */

const solution = (numList, n) =>
  numList.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);

/** 이전 풀이 */
/*
const solution = (numList, n) =>
  numList.sort((a, b) => {
    const [aDist, bDist] = [Math.abs(n - a), Math.abs(n - b)];
    if (aDist === bDist) return b - a;
    return aDist - bDist;
  });
*/

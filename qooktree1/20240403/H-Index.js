/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42747#
 * 문제 풀이 포인트: H-index에 대해 이해하기
 * 나의 실수: 문제를 이해하는 데 너무 오랜 시간이 걸렸다.. 문제가 잘못된 느낌이다.
 * [ 풀이 과정 ]
 * 1. citations의 n번째 값이 최초로 n을 넘지 않을 때를 구해야 하기 때문에 내림차순 정렬을 한다.
 * 2. n번째 값이 넘었을 경우에는 인덱스를 return해준다.
 * 3. 만약 동일한 값들로 구성되어 있고 배열의 길이가 해당 값보다 높다면 전부 다 가능한 경우이기 때문에 배열의 길이를 return해준다.
 */

const solution = (citations) => {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] < i + 1) return i;
  }
  return citations.length;
};

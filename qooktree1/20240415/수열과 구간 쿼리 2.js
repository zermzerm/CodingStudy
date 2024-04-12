/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181923
 * 문제 풀이 포인트: 구현
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. queries의 각 원소 [s, e, k]를 구하여 반복문을 통해 k보다 큰 수들을 구한다.
 * 2. minNum이라는 변수를 만들어 가장 작은 값을 구한다.
 */

const solution = (arr, queries) =>
  queries.map((query) => {
    const [s, e, k] = query;
    let minNum = 1000001;
    for (let i = s; i <= e; i++) {
      if (arr[i] > k) minNum = Math.min(minNum, arr[i]);
    }
    return minNum === 1000001 ? -1 : minNum;
  });

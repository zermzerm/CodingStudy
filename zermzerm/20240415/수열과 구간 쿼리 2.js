/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181923
 * 문제 이름 : 수열과 구간 쿼리 2
 * 문제 풀이 포인트: 2중 for문..! 비교해서 값보다 큰것만 넣고 거기서 최솟값만 answer에 추가 없으면 -1추가
 * 나의 실수: j 시작 부분을 0부터로 고정해서 틀렸었다. 멍청!
 */

function solution(arr, queries) {
  let answer = [];
  for (let i = 0; i < queries.length; i++) {
    let tmp = [];
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      if (arr[j] > queries[i][2]) tmp.push(arr[j]);
    }
    if (tmp.length === 0) answer.push(-1);
    else answer.push(Math.min(...tmp));
  }
  return answer;
}

console.log(solution([0, 3, 1, 2, 4, 5, 6], [[2, 5, 2]]));

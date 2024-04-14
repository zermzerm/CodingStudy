/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181923
 * 문제 풀이 과정
 * 1. 배열 queries의 배열 원소들을 돈다.
 * 2. 구조 분해 할당을 사용해 s, e, k에 각각 값 할당
 * 3. slice를 사용해 해당 범위까지 배열 arr를 자른다.
 * 4. filter를 사용해 k보다 큰 요소만 남김
 * 5. sort를 사용해 오름차순 정렬해서 새로운 변수에 넣어줌
 * 6. 첫 번째 원소를 배열 answer에 넣는데, 만약 배열이 빈 경우 -1 넣기
 */

function solution(arr, queries) {
  let answer = [];

  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];
    const newArr = arr
      .slice(s, e + 1)
      .filter((val) => val > k)
      .sort((a, b) => a - b);
    newArr.length === 0 ? answer.push(-1) : answer.push(newArr[0]);
  }
  return answer;
}

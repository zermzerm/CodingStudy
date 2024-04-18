/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/43165
 * 문제 풀이 포인트: DFS
 * 나의 실수: 아직 재귀에 대해 잘 이해하지 못한 것 같다. 방문배열을 사용하며 코드가 꼬여서 시간이 걸렸다.
 * [ 풀이 과정 ]
 * 1. DFS
 */

const solution = (numbers, target) => {
  let answer = 0;

  const dfs = (cnt, idx, ssum, target) => {
    if (cnt === numbers.length) {
      if (ssum === target) answer++;
      return;
    }
    dfs(cnt + 1, idx + 1, ssum + numbers[idx], target);
    dfs(cnt + 1, idx + 1, ssum - numbers[idx], target);
  };

  dfs(0, 0, 0, target);
  return answer;
};

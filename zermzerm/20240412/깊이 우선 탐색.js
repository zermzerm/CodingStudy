//깊이 우선 탐색 dfs
function solution(arr, target) {
  let answer = 0;
  function dfs(index, sum) {
    if (index === arr.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    dfs(index + 1, sum + arr[index]);
    dfs(index + 1, sum - arr[index]);
  }
  dfs(0, 0);
  return answer;
}

console.log(solution([4, 1, 2, 1], 4));

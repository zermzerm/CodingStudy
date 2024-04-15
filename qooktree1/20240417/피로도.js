/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/87946
 * 문제 풀이 포인트: DFS
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. DFS와 방문배열(visited)를 통해 접근 가능한 던전을 탐색
 * 2. 접근 가능한 던전이면 방문배열(visited)을 true로 만들어 방문 표시를 한 후 재귀를 통해 접근
 * 3. 만약 반복문을 끝까지 완료했을 경우 방문할 곳이 없기 때문에 탐험할 수 있는 최대 던전 수를 최신화시켜준다.
 */

let answer = 0;

const dfs = (cnt, fatigue, dungeons, visited) => {
  for (let i = 0; i < dungeons.length; i++) {
    if (!visited[i] && fatigue >= dungeons[i][0]) {
      visited[i] = true;
      dfs(cnt + 1, fatigue - dungeons[i][1], dungeons, visited);
      visited[i] = false;
    }
  }
  answer = Math.max(answer, cnt);
  return;
};

const solution = (k, dungeons) => {
  const visited = new Array(dungeons.length).fill(false);

  dfs(0, k, dungeons, visited);
  return answer;
};

// https://school.programmers.co.kr/learn/courses/30/lessons/1844
/*  필요한 내용
    총 행(rows),렬(cols) 길이 / 상,하,좌,우를 나타내는 배열(directions) / 방문한곳을 체크해주는 배열(visited)
    현재 진행 상태를 나타내는 배열(queue) / BFS while문 / while문 속 도착했을때 return문
    while문 속 상하좌우 이동하는 for문 / 목표 지점에 도달 못했을때의 return문 */
/*  발견한 문제점
    1.
    visited 배열을 Array(rows).fill()로 배열을 채우면 모든 행이 같은 참조를 갖게 됨
     Array.from을 사용하여 각 행이 독립적으로 생성되도록 수정
    2.
    조건문에서 !visited[newRow][newCol] && maps[newRow][newCol] === 1보다
    maps[newRow][newCol] === 1 && !visited[newRow][newCol] 이게 더 효율적임
    => 이해 X
*/
function solution(maps) {
  // 총 행렬
  let rows = maps.length;
  let cols = maps[0].length;
  // 상하좌우
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  // 방문한곳 변수
  // const visited = Array(rows).fill(Array.from({ length: cols }, () => false));
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  // 현재 진행 상태 변수 [현재행,현재열,현재거리]
  const queue = [[0, 0, 1]];
  visited[0][0] = true;
  // BFS 시작
  while (queue.length > 0) {
    const [curRow, curCol, dist] = queue.shift();
    // console.log(curRow, curCol, dist);
    // 행렬의 끝의 위차(도착지점)에 도착하면 총 거리 dist return
    if (curRow === rows - 1 && curCol === cols - 1) {
      return dist;
    }
    // 그 외에는 시작
    for (const [dr, dc] of directions) {
      let newRow = curRow + dr;
      let newCol = curCol + dc;
      //   console.log(newRow, newCol);
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        !visited[newRow][newCol] &&
        maps[newRow][newCol] === 1
      ) {
        visited[newRow][newCol] = true;
        queue.push([newRow, newCol, dist + 1]);
      }
    }
  }
  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);

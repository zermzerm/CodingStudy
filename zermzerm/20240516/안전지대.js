/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120866
 * 문제 이름 : 안전지대
 * 문제 풀이 포인트: for와 for와 for와 for. 1을 만나면 i-1부터 i+1까지 j-1부터 j+1까지 0을 다 2로 바꿔서 나중에 0의 개수만 세기
 * 나의 실수: 범위 실수를 했다.
 */

function solution(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        for (let k = i - 1; k <= i + 1; k++) {
          if (k < 0 || k >= board.length) continue;
          for (let p = j - 1; p <= j + 1; p++) {
            if (p < 0 || p >= board.length) continue;
            if (board[k][p] === 0) board[k][p] = 2;
          }
        }
      }
    }
  }
  return board.flat().filter((el) => el === 0).length;
}

console.log(
  solution([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
);

/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120861
 * 문제 이름 : 캐릭터의 좌표
 */

// 1. 먼저 board의 최대 값과 최솟 값을 구한다.
// 2. 결과를 담아줄 배열을 만든다.
// 3. keyinput를 map을 돌려, switch ~ case문으로 경우의 수를 나누어준다.
// 4. 결과 값을 담을 때 만약 최댓값과 최솟값을 넘어가면 카운트가 안되도록 조건을 걸어준다.
// 5. 결과 return

function solution(keyinput, board) {
  const maxBoard = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
  const minBoard = [-Math.floor(board[0] / 2), -Math.floor(board[1] / 2)];
  const result = [0, 0];
  keyinput.map((val) => {
    switch (val) {
      case "up":
        if (result[1] < maxBoard[1]) result[1] += 1;
        break;
      case "down":
        if (result[1] > minBoard[1]) result[1] -= 1;
        break;
      case "left":
        if (result[0] > minBoard[0]) result[0] -= 1;
        break;
      case "right":
        if (result[0] < maxBoard[0]) result[0] += 1;
        break;
    }
  });
  return result;
}

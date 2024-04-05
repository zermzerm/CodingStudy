/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120861
 * 문제 풀이 과정
 * 1. 시작 위치를 정한다 [0, 0]
 * 2. keyinput 배열을 돌면서 switch문으로 해당 keyinput 배열 원소에 맞게 더하고 빼준다.
 * 3. 단, board의 범위를 넘어가지 않게 if 문으로 조건을 걸어준다. 
 */

function solution(keyinput, board) {
  let answer = [0, 0];

  keyinput.forEach((val) => {
    switch (val) {
      case "up": {
        if (answer[1] < (board[1] - 1) / 2) answer[1] += 1;
        break;
      }
      case "down": {
        if (answer[1] > ((board[1] - 1) / 2) * -1) answer[1] -= 1;
        break;
      }
      case "left": {
        if (answer[0] > ((board[0] - 1) / 2) * -1) answer[0] -= 1;
        break;
      }
      case "right": {
        if (answer[0] < (board[0] - 1) / 2) answer[0] += 1;
        break;
      }
    }
  });
  return answer;
}

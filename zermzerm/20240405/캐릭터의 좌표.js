/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120861
 * 문제 이름 : 캐릭터의 좌표
 * 문제 풀이 포인트:
 * 나의 실수:
 */

const solution = (keyinput, board) => {
  const answer = [0, 0];
  keyinput.forEach((el) => {
    switch (el) {
      case 'left':
        answer[0]--;
        if (answer[0] < -Math.floor(board[0] / 2))
          answer[0] = -Math.floor(board[0] / 2);
        break;
      case 'right':
        answer[0]++;
        if (answer[0] > Math.floor(board[0] / 2))
          answer[0] = Math.floor(board[0] / 2);
        break;
      case 'up':
        answer[1]++;
        if (answer[1] > Math.floor(board[1] / 2))
          answer[1] = Math.floor(board[1] / 2);
        break;
      case 'down':
        answer[1]--;
        if (answer[1] < -Math.floor(board[1] / 2))
          answer[1] = -Math.floor(board[1] / 2);
        break;
    }
  });
  return answer;
};

console.log(solution(['down', 'down', 'down', 'down', 'down'], [7, 9]));

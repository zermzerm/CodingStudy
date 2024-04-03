/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120861
 * 문제 이름 : 캐릭터의 좌표
 * 문제 풀이 포인트:
 * 나의 실수:
 */

const compare = (k, plus, board, answer) => {
  if (plus) {
    answer[k]++;
    if (answer[k] > Math.floor(board[k] / 2))
      answer[k] = Math.floor(board[k] / 2);
  } else {
    answer[k]--;
    if (answer[k] < -Math.floor(board[k] / 2))
      answer[k] = -Math.floor(board[k] / 2);
  }
};

const solution = (keyinput, board) => {
  const answer = [0, 0];
  keyinput.forEach((el) => {
    switch (el) {
      case 'left':
        compare(0, false, board, answer);
        break;
      case 'right':
        compare(0, true, board, answer);
        break;
      case 'up':
        compare(1, true, board, answer);
        break;
      case 'down':
        compare(1, false, board, answer);
        break;
    }
  });
  return answer;
};

console.log(solution(['down', 'down', 'down', 'down', 'down'], [7, 9]));

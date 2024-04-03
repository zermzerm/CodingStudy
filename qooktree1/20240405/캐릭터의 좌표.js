/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120861
 * 문제 풀이 포인트:
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1.상하좌우 움직임을 해시값으로 관리하기 위해 dirMap 객체 생성
 * 2. 범위를 벗어났는지 판별해주는 함수(isOnBoard)를 따로 생성
 * 2-1. [0, 0]이 정중앙이기 때문에 1을 빼고 2로 나눈 값 만큼의 범위를 가지고 있다.
 * 2-2. 범위를 벗어나면 false를 return 한다.
 * 3. 변할 수 있는 변수 x, y를 초기값 [0, 0]으로 설정한다.
 * 4. 반복문을 사용해 keyInput을 방문하면서 범위 판별 함수에서 양수 값이 나오면 x, y를 변화시켜준다.
 */

const dirMap = {
  left: [-1, 0],
  right: [1, 0],
  up: [0, 1],
  down: [0, -1],
};

const isOnBoard = (x, y, n, m) => {
  const [N, M] = [(n - 1) / 2, (m - 1) / 2];
  if (-N <= x && x <= N && -M <= y && y <= M) return true;
  return false;
};

const solution = (keyInput, board) => {
  let [x, y] = [0, 0];
  for (const key of keyInput) {
    if (isOnBoard(x + dirMap[key][0], y + dirMap[key][1], board[0], board[1])) {
      x += dirMap[key][0];
      y += dirMap[key][1];
    }
  }
  return [x, y];
};

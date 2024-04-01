/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
 * 문제 풀이 포인트: 얕은 복사, 깊은 복사
 * 나의 실수: X
 */

const solution = (array, commands) =>
  commands.map(([i, j, k]) => {
    const tmpArr = array.slice();
    return tmpArr.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
  });

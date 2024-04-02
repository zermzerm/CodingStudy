/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
 * 문제 이름 : K번째수
 * 문제 풀이 포인트: slice, sort
 * 나의 실수: slice의 시작부분을 실수했다.
 */

function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    answer.push(
      array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[
        commands[i][2] - 1
      ]
    );
  }
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

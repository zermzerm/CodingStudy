/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42860
 * 문제 풀이 포인트: 연속된 A들의 인덱스를 확인
 * 나의 실수: 생각이 나지 않아 답을 살짝 봤다.
 * [ 풀이 과정 ]
 * 1. 커서를 왼쪽, 오른쪽으로 움직여야 하는 최소 이동 거리를 minMove에 할당한다.
 * 2. 반복문을 돌며 알파벳을 A로 만드는데 필요한 최소 이동거리를 calc 함수를 통해 계산한다.
 * 3. 반복문을 돌때마다 연속된 A가 끝나는 index를 찾기 위해 while문을 사용한다.
 * 4. 좌우로 이동할 수 있는 최소 이동 거리는 처음 시작을 처음 혹은 마지막에서 시작했는지 고려하여 최소값을 구한다.
 */

const calc = (c) => Math.min(91 - c.charCodeAt(), c.charCodeAt() - 65);

const solution = (name) => {
  let answer = 0;
  let idx = 0;
  let minMove = name.length - 1;
  for (let i = 0; i < name.length; i++) {
    answer += calc(name[i]);
    idx = i + 1;
    while (idx < name.length && name[idx] === "A") idx++;

    minMove = Math.min(
      minMove,
      i * 2 + name.length - idx,
      i + 2 * (name.length - idx)
    );
  }
  return answer + minMove;
};

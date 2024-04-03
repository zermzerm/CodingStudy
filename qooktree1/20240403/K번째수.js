/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
 * 문제 풀이 포인트: 얕은 복사, 깊은 복사
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. sort method를 사용하기 때문에 1차원 배열인 array를 slice()를 이용하여 복사해줍니다. (sort를 해주면 array의 순서 자체가 변하기 때문)
 * 3. tmpArr를 i, j 인덱스를 기준으로 배열을 새로 만들고 오름차순 정렬 후 k 번째 인덱스를 접근한여 return 한다.
 */

const solution = (array, commands) =>
  commands.map(
    ([i, j, k]) => array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]
  );

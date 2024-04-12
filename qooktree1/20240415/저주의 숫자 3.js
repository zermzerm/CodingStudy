/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120871
 * 문제 풀이 포인트: 구현
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. n의 제한사항이 100까지니 반복문을 통해 구할 숫자를 여유롭게 1000까지 구한다.
 * 2. 3의 배수와 숫자 3을 사용하지 않기 때문에 includes method를 사용해 "3"이 없는 경우와 3으로 나누어 떨어지지 않는 경우 cnt를 증가시킨디ㅏ.
 * 3. cnt와 정수 n이 같아질 때 cnt를 return한다.
 */

const solution = (n) => {
  let cnt = 0;
  for (let i = 1; i <= 1000; i++) {
    if (String(i).includes("3") === false && i % 3 !== 0) cnt++;
    if (cnt === n) return i;
  }
};

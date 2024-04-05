/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120860
 * 문제 풀이 포인트: dots의 인자들 중 서로 다른 가로와 세로 길이의 곱을 구하기
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. dots의 첫 번째 인자를 기준으로 dots[0][0] 즉, y 좌표가 다른 값이 있는지 반복문을 통해 비교
 * 1-1. 다른 값을 찾았다면 - 과 Math.abs를 사용하여 길이를 구한다.
 * 2. y 좌표와 똑같이 x 좌표를 구해서 길이를 구한다.
 * 3. 구한 두 값을 곱하여 return 한다.
 */

const solution = (dots) => {
  let width, height;
  for (let i = 1; i < dots.length; i++) {
    if (dots[0][0] !== dots[i][0]) width = Math.abs(dots[0][0] - dots[i][0]);
    if (dots[0][1] !== dots[i][1]) height = Math.abs(dots[0][1] - dots[i][1]);
  }
  return width * height;
};

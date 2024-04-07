/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120860
 * 문제 이름 : 직사각형 넓이 구하기
 * 접근 방법
 * 1. 일단 x, y를 담을 빈 배열 생성
 * 2. dots에서 첫번째 인자는 x, 두번째 인자는 y니까 해당 값들 x, y 배열에 각각 넣어준다.
 * 3. 그리고 정렬한 배열의 가장 맨 마지막 값 - 가장 첫번째 값을 빼준다.
 * 4. x, y를 곱하면 직시각형 넓이가 나온다.
 */

function solution(dots) {
  const x = [];
  const y = [];
  dots.map((val) => {
    x.push(val[0]);
    y.push(val[1]);
  });
  return (
    Math.abs(x.sort()[x.length - 1] - x.sort()[0]) *
    Math.abs(y.sort()[y.length - 1] - y.sort()[0])
  );
}

/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181897
 * 문제 이름: 리스트 자르기
 * 문제 풀이 포인트: filter 문법
 * 나의 실수: slice 문법에 대해 정확히 파악하지 못하여 3번째 인자를 적는 실수롤 하였다 :)
 */

const solution = (n, slicer, numbers) => {
  const [a, b, c] = slicer;
  if (n === 1) return numbers.slice(0, b + 1);
  if (n === 2) return numbers.slice(a);
  if (n === 3) return numbers.slice(a, b + 1);
  if (n === 4) return numbers.slice(a, b + 1).filter((_, idx) => !(idx %= c));
};

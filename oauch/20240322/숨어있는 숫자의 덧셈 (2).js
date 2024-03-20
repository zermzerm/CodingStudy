/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120864
 * 문제 이름 : 숨어있는 숫자의 덧셈 (2)
 * 배워야할 점 : 정규표현식에 대해서 더 공부해봐야 할꺼 같다
 */

function solution(my_string) {
  let result = 0;
  my_string
    .replace(/[^0-9]/g, " ")
    .split(" ")
    .filter((val) => val !== "")
    .map((val) => (result += Number(val)));
  return result;
}

/**
 * URL : https://school.programmers.co.kr/learn/courses/30/lessons/120864
 * 배운 지식
 * - match()를 활용해 숫자만 찾아오기,
 * - 정규표현식: [0-9](숫자 찾기), +(바로 앞 표현식이 연속되면 연속된 수를 모두 찾음),
 * - g(전체 찾기)
 */

function solution(my_string) {
  let answer = 0;
  let num = my_string.match(/[0-9]+/g);
  if (num === null) {
    answer = 0;
  } else {
    answer = num.reduce((a, c) => a + Number(c), 0);
  }
  return answer;
}

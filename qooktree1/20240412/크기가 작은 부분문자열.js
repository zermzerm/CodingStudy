/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/147355
 * 문제 풀이 포인트: substring
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 문자열 p를 숫자로 변환 하여 변수에 저장한다.(numberP)
 * 2. 반복문을 사용하여 부분문자열을 비교한다.
 */

const solution = (t, p) => {
  const numberP = +p;
  let answer = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    if (+t.substring(i, p.length + i) <= numberP) answer++;
  }
  return answer;
};

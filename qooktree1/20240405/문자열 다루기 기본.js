/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12918
 * 문제 풀이 포인트: 숫자 뒤에 e를 추가하면 지수 표현식으로 인식을 한다. (every, isNaN)
 * 나의 실수: 지수 표현식을 고려하지 못하였다.
 * [ 풀이 과정 ]
 * 1.주어진 문자열의 길이가 4 혹은 6이고 숫자로만 구성되어 있는지 확인하기 위해 every method와 isNaN을 사용하였다.
 */

const solution = (s) =>
  (s.length === 4 || s.length === 6) && s.split("").every((c) => !isNaN(c));

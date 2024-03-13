/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12906
 * 문제 이름 : 같은 숫자는 싫어
 * 접근 방법 : 배열 arr를 filter 함수를 사용해서 [index에 해당하는 값]과 [index + 1의 값]이 다른거만 출력되도록 했다.
 */

function solution(arr) {
  return arr.filter((_, index) => arr[index] !== arr[index + 1]);
}

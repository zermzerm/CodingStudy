/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12939
 * 문제 풀이 포인트: split, sort?
 * 나의 실수: X, 최대값 최소값 -> max, min을 활용해보자 다음엔
 */

//다시 푼 코드
function solution(s) {
  let arr = s.split(' ').sort((a, b) => a - b);
  return arr[0] + ' ' + arr[arr.length - 1];
}

//예전에 푼 코드
function solution(s) {
  var answer = '';
  arr = [];
  arr = s.split(' ');
  arr.sort(function (a, b) {
    return a - b;
  });
  answer = arr[0] + ' ' + arr[arr.length - 1];
  return answer;
}

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12948
 * 문제 풀이 포인트: for와 if만 있다면 어디든 갈 수 있어...
 * 나의 실수: 정규식도 있어고 repeat 방법도 있었다.. 너무 1차원적으로 풀었다.
 */

function solution(phone_number) {
  var arr = phone_number.split('');
  for (i = 0; i < arr.length; i++) {
    if (arr.length - 4 - i > 0) {
      arr.splice(i, 1, '*');
    }
  }
  return arr.join('');
}

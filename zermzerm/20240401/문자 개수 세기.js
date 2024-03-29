/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181902
 * 문제 이름 : 문자 개수 세기
 * 문제 풀이 포인트: Array(52).fill, charCodeAt()
 * 나의 실수:
 */

function solution(my_string) {
  let arr = Array(52).fill(0);
  for (let i = 0; i < my_string.length; i++) {
    my_string[i] === my_string[i].toUpperCase()
      ? arr[+my_string[i].charCodeAt() - 65]++
      : arr[+my_string[i].charCodeAt() - 71]++;
  }
  return arr;
}

console.log(solution("Programmers"));

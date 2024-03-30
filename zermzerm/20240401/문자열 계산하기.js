/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12917
 * 문제 이름 : 문자열 계산하기
 * 문제 풀이 포인트: split, for (eval을 쓰면 아주 간단하지만 위험하니 패스)
 * 나의 실수: 더 좋은 방법 없을까
 */

function solution(my_string) {
  let arr = my_string.split(" ");
  let tmp = +arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i] === "+" ? (tmp += +arr[i + 1]) : (tmp -= +arr[i + 1]);
    i++;
  }
  return tmp;
}

console.log(solution("3 + 4 - 5"));

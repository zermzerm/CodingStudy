/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/131705
 * 문제 이름 : 삼총사
 * 무식하지만 풀었다.. 속도도 빠름
 */

function solution(number) {
  let result = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) result++;
      }
    }
  }
  return result;
}

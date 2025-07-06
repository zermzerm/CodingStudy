/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181830
 * 문제 풀이 포인트: if?
 * 나의 실수: 고차원 배열의 깊은 복사
 */

function solution(arr) {
  let answer = arr.map((v) => [...v]);
  if (arr.length === arr[0].length) return answer;
  else if (arr.length > arr[0].length) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - arr[0].length; j++) {
        answer[i].push(0);
      }
    }
  } else if (arr.length < arr[0].length) {
    for (let i = 0; i < arr[0].length - arr.length; i++)
      answer.push(new Array(arr[0].length).fill(0));
  }
  return answer;
}

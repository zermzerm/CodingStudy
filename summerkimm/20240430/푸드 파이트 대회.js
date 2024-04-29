/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/134240
 * 문제 풀이 과정
 * 1. 1일 경우는 거른다.
 * 2. 1이 아닐 경우에는 2로 나눠서 인덱스에 그만큼 반복하기
 * 3. 리턴할 때 0이랑 뒤집은 문자열 더하기
 */
function solution(food) {
  let answer = "";
  for (let i = 1; i < food.length; i++) {
    if (food[i] === 1) continue;
    let a = parseInt(food[i] / 2);
    answer += String(i).repeat(a);
  }
  return answer + "0" + [...answer].reverse().join("");
}

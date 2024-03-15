/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12939
 * 풀이 포인트 : 아래와 같이 풀긴 했으나 너무 비효율적인 것 같다.. 
 */

function solution(s) {
  let result = [];
  let array = s.split(" ");
  let min_number = Math.min(...array);
  result.push(min_number);
  let max_number = Math.max(...array);
  result.push(max_number);
  const answer = result.join(" ");
  return answer;
}

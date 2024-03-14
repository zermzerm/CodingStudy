/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12939
 * 풀이 방법: 아래와 같이 풀긴 했으나 비효율적인 느낌.. 
 */

function solution(s) {
  let answer = [];
  let array = s.split(" ");
  let min_number = Math.min(...array);
  answer.push(min_number);
  let max_number = Math.max(...array);
  answer.push(max_number);
  const result = answer.join(" ");
  return result;
}

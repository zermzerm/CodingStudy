/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12926
 */
function solution(s, n) {
  var answer = "";

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer = answer + " ";
      continue;
    }
    let arr = upper.includes(s[i]) ? upper : lower;
    let index = arr.indexOf(s[i]) + n;
    if (index >= arr.length) {
      index = index - arr.length;
    }
    answer = answer + arr[index];
  }
  return answer;
}

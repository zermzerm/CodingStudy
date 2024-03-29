/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181902
 */
function solution(my_string) {
  let answer = Array(52).fill(0);
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < my_string.length; i++) {
    let idx = ALPHABET.indexOf(my_string[i]);
    answer[idx]++;
  }
  return answer;
}

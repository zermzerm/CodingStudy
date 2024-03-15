/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181909
 * 나의 풀이 : for문, slice(), sort()
 */

function solution(my_string) {
  let answer = [];
  for (let i = 0; i < my_string.length; i++) {
    let word = my_string.slice(i);
    answer.push(word);
  }
  answer.sort();
  return answer;
}

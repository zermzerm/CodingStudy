// https://school.programmers.co.kr/learn/courses/30/lessons/84512
// 문제가 이해가 안된다 사전순이...
function solution(word) {
  let answer = 0;
  // 5^0, 5^0 + 5^1, 5^0 + 5^1 + 5^2, 5^0 + 5^1 + 5^2 + 5^3, 5^0 + 5^1 + 5^2 + 5^3 + 5^4
  let c = [781, 156, 31, 6, 1];
  let arr = ["A", "E", "I", "O", "U"];
  for (let i = 0; i < word.length; i++) {
    answer += arr.indexOf(word[i]) * c[i] + 1;
  }
  return answer;
}

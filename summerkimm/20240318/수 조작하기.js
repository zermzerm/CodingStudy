/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181925
 * 나의 실수: 처음에 switch문에 break 빼먹음
 */

function solution(numLog) {
  var answer = "";
  for (let i = 1; i < numLog.length; i++) {
    let result = numLog[i] - numLog[i - 1];
    switch (result) {
      case 1:
        answer += "w";
        break;
      case -1:
        answer += "s";
        break;
      case 10:
        answer += "d";
        break;
      case -10:
        answer += "a";
        break;
    }
  }
  return answer;
}

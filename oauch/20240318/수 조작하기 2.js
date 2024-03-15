/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181925
 * 문제 이름 : 수 조작하기 2
 * 문제점 : for문이랑 switch문을 사용하였는데, 시간이랑 메모리가 많이 사용된다.
 */
function solution(numLog) {
  let result = "";
  for (let i = 0; i < numLog.length; i++) {
    switch (numLog[i] - numLog[i - 1]) {
      case 1:
        result += "w";
        break;
      case -1:
        result += "s";
        break;
      case 10:
        result += "d";
        break;
      case -10:
        result += "a";
        break;
    }
  }
  return result;
}

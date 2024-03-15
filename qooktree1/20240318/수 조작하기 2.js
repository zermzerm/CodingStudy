/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181925
 * 문제 풀이 포인트: 문제 그대로 구현
 * 나의 실수: 문제를 제대로 파악하지 못하였다..
 */

const solution = (numLog) => {
  let answer = "";
  for (let i = 0; i < numLog.length - 1; i++) {
    const [first, second] = [numLog[i], numLog[i + 1]];
    if (first === second - 1) answer += "w";
    else if (first - 1 === second) answer += "s";
    else if (first === second - 10) answer += "d";
    else if (first - 10 === second) answer += "a";
  }
  return answer;
};

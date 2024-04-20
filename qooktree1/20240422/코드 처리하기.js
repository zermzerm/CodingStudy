/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181932
 * 문제 풀이 포인트: 문제 그대로 구현
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 문제 설명 그대로 구현
 */

const solution = (code) => {
  const codeLen = code.length;
  let mode = false;
  let result = "";
  for (let i = 0; i < codeLen; i++) {
    if (mode) {
      if (code[i] !== "1" && i % 2) result += code[i];
      if (code[i] === "1") mode = !mode;
    } else {
      if (code[i] !== "1" && i % 2 === 0) result += code[i];
      if (code[i] === "1") mode = !mode;
    }
  }
  return result ? result : "EMPTY";
};

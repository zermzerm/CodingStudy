/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181932
 * 문제 이름 : 코드 처리하기
 */

function solution(code) {
  let mode = 0;
  let result = "";
  [...code].forEach((val, index) => {
    if (mode === 0) {
      if (val !== "1" && index % 2 === 0) {
        result += val;
      }
      if (val === "1") mode = 1;
    } else if (mode === 1) {
      if (val !== "1" && index % 2 !== 0) {
        result += val;
      }
      if (val === "1") mode = 0;
    }
  });
  if (result === "") result = "EMPTY";
  return result;
}

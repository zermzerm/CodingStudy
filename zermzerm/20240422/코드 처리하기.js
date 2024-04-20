/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181932
 * 문제 이름 : 코드 처리하기
 * 문제 풀이 포인트: code[i] 가 1이면 mode를 전환, 그 외에는 모드에 따라 ret에 들어갈 값 적용
 * 나의 실수:
 */

function solution(code) {
  let mode = false;
  let ret = "";
  for (let i = 0; i < code.length; i++) {
    if (code[i] === "1") {
      mode = !mode;
      continue;
    }
    mode
      ? i % 2 === 1
        ? (ret += code[i])
        : ""
      : i % 2 === 0
      ? (ret += code[i])
      : "";
  }
  return ret.length ? ret : "EMPTY";
}

console.log(solution("abc1abc1abc"));

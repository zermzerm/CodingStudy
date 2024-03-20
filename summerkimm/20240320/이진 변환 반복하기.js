/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/70129
 * 배운 지식: toString(2) -> 이진법 변환 
 */

// 윤혁님 코드 참고 
function solution(s) {
  let count = 0;
  let zeroCount = 0;

  while (s !== "1") {
    const arr = s
      .split("")
      .map((val) => {
        if (val === "0") {
          zeroCount++;
          return;
        }
        return val;
      })
      .join("");
    s = arr.length.toString(2);
    count++;
  }
  return [count, zeroCount];
}

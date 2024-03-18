/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/70129
 * 문제 풀이 포인트: toString을 이용한 2진수 변환
 * 나의 실수: X
 */

// 이진 변환 함수
const binaryChange = (str) => {
  let cnt = 0;
  const newS = str
    .split("")
    .filter((c) => {
      if (c === "0") cnt++;
      else return c;
    })
    .length.toString(2);
  return [cnt, newS];
};

const solution = (s) => {
  let times = 0;
  let zeroCnt = 0;
  while (s !== "1") {
    const [cnt, newS] = binaryChange(s);
    zeroCnt += cnt;
    s = newS;
    times++;
  }
  return [times, zeroCnt];
};

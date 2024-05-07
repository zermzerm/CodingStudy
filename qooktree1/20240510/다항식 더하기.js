/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120863
 * 문제 풀이 포인트: 변수 x 앞에 오는 1은 생략한다.
 */

const solution = (polynomial) => {
  let numStack = 0;
  let xStack = 0;
  const polynomialArr = polynomial.split(" + ");
  let answer = "";
  polynomialArr.forEach((c) => {
    if (!isNaN(c)) numStack += +c;
    else xStack += c === "x" ? 1 : +c.slice(0, c.length - 1);
  });
  if (xStack && numStack) return `${xStack === 1 ? "" : xStack}x + ${numStack}`;
  if (xStack) return `${xStack === 1 ? "" : xStack}x`;
  return String(numStack);
};

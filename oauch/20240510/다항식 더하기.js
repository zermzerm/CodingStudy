/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120863#
 * 문제 이름 : 다항식 더하기
 * 저보다 못 푼 사람 있으면 나와보세요
 */

function solution(polynomial) {
  let count = 0;
  const split = polynomial.split(" + ");
  const trash = split.filter((val) => !val.includes("x"));
  if (split.length === trash.length)
    return String(split.reduce((arr, val) => (arr += +val), 0));
  for (let i of split) {
    if (i.endsWith("x")) {
      if (i === "x") count++;
      count += +i.slice(0, i.length - 1);
    }
  }
  if (count === 1) count = "";
  if (!trash.length) return String(count) + "x";

  const add = trash.reduce((arr, val) => (arr += +val), 0);

  return String(count) + "x" + " + " + add;
}

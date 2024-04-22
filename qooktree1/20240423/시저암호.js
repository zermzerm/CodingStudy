/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12926
 * 문제 풀이 포인트: charCodeAt, fromCharCode method
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1.
 */

const isLowerCase = (c) => /^[a-z]$/.test(c);

const solution = (s, n) => {
  const arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") continue;
    const cNumber = arr[i].charCodeAt() + n;
    if (
      (cNumber > 90 && !isLowerCase(arr[i])) ||
      (cNumber > 122 && isLowerCase(arr[i]))
    )
      arr[i] = String.fromCharCode(cNumber - 26);
    else arr[i] = String.fromCharCode(cNumber);
  }
  return arr.join("");
};

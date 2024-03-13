/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181830
 * 문제 풀이 포인트: Array method 사용
 * 나의 실수: X
 */

const solution = (arr) => {
  const colLen = arr.length;
  const rowLen = arr[0].length;

  if (colLen === rowLen) return arr;
  if (colLen > rowLen) {
    return arr.map((a) => [
      ...a,
      ...new Array(Math.max(colLen - rowLen, 0)).fill(0),
    ]);
  } else {
    return [
      ...arr,
      ...Array.from(new Array(rowLen - colLen), () => Array(rowLen).fill(0)),
    ];
  }
};

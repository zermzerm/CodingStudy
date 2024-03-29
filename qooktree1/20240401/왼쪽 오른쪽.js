/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181890
 * 문제 풀이 포인트: X
 * 나의 실수: "l"이나 "r"이라는 문제 조건을 "l"과 "r" 모두로 잘못 해석하는 실수롤 범했다.
 */

const solution = (strList) => {
  let index = -1;
  const strListLen = strList.length;
  for (let i = 0; i < strListLen; i++) {
    if (strList[i] === "l" || strList[i] === "r") {
      index = i;
      break;
    }
  }

  if (index === -1 || index === -1) return [];

  if (strList[index] === "l") return strList.slice(0, index);
  return strList.slice(index + 1);
};

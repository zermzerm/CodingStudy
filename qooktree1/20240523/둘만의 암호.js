/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/155652
 * 문제 풀이 포인트: ASCII Code
 * 나의 실수: 진짜 급하게 풀었다..
 */

const solution = (s, skip, index) => {
  return s
    .split("")
    .map((c) => {
      let cNum = c.charCodeAt();
      let times = 0;
      let newC = "";
      let tmpIndex = 1;
      while (index > times) {
        let tmp = cNum + tmpIndex;
        if (tmp > 122) tmp -= 26;
        if (tmp > 122) tmp -= 26;
        newC = String.fromCharCode(tmp);
        if (!skip.includes(newC)) times++;
        tmpIndex++;
      }
      return newC;
    })
    .join("");
};

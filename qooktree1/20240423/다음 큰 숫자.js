/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12911
 * 문제 풀이 포인트: toString을 이용한 진수 변환
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. toString을 이용하여 2진수를 만든 후 1의 개수를 비교한다.
 */

const countOnes = (num) => [...num.toString(2)].filter((c) => c === "1").length;

const solution = (n) => {
  const oneCnt = countOnes(n);
  for (let i = n + 1; i <= 1000000; i++) {
    if (oneCnt === countOnes(i)) return i;
  }
};

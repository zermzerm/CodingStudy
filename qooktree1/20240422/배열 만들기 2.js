/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181921
 * 문제 풀이 포인트: replace
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. l이상 r이하의 정수로 이루어진 배열을 filter method를 사용해 숫자가 0과 5로 이루어진 배열을 찾아낸다.
 * 2. 만약 배열의 길이가 0이라면 [-1]를 반환한다.
 */

const solution = (l, r) => {
  const answer = Array.from({ length: r - l + 1 }, (_, i) => i + l).filter(
    (num) => String(num).replace(/5|0/g, "") === ""
  );
  return answer.length > 0 ? answer : [-1];
};

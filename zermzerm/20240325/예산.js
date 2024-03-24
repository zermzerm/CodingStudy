/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12982
 * 문제 풀이 포인트: 더하기
 * 나의 실수: 문제 이해, 난 왜이리 길지...
 */

const solution = (d, budget) => {
  let cnt = 0,
    sum = 0;
  let arr = d.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > budget) return cnt;
    if (sum === budget) {
      cnt++;
      return cnt;
    }
    cnt++;
  }
  return cnt;
};

console.log(solution([2, 2, 3, 3], 10));

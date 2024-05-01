/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12977
 * 문제 이름 : 소수 만들기
 * 문제 풀이 포인트: 조합 함수와 소수 판별 함수 만들어서 풀기
 * 나의 실수: 위 둘 함수 짜는법에 대해 정확히 몰라서 조사
 */

// 조합 함수(배열중 몇개를 선택해서 나올수 있는 조합 구하기)
function combination(arr, n) {
  let cnt = 0;
  function backtrack(tmp, start) {
    if (tmp.length === n) {
      let sum = tmp.reduce((acc, cur) => acc + cur, 0);
      if (prime(sum)) cnt++;
      return;
    }
    for (let i = start; i < arr.length; i++) {
      tmp.push(arr[i]);
      backtrack(tmp, i + 1);
      tmp.pop();
    }
  }

  // 조합 시작
  backtrack([], 0);
  return cnt;
}

// 소수인지 판별
function prime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  return combination(nums, 3);
}

console.log(solution([1, 2, 7, 6, 4]));

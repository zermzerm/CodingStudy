/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12977
 * 문제 풀이 포인트: 소수 만들기
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 3중 for문으로 세 개의 다른 숫자를 구한다.
 * 2. isPrimeNumber라는 함수를 만들어 소수 판별을 하게 만들었다.
 */

const isPrimeNumber = (n) => {
  for (let i = 2; i <= Math.ceil(n ** (1 / 2)); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const solution = (nums) => {
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        answer += isPrimeNumber(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  return answer;
};

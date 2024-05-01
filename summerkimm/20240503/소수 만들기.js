/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12977
 * 문제 풀이 과정
 * 1. for문을 사용해 3개씩 더하고 answer++.
 * 2. 소수 판별 과정에서 소수가 아닌 숫자가 있으면 answer--
 */
function solution(nums) {
  let answer = 0;

  for (let i = 0; i <= nums.length - 3; i++) {
    for (let j = i + 1; j <= nums.length - 2; j++) {
      for (let k = j + 1; k <= nums.length - 1; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        answer++;

        for (let l = 2; l <= Math.sqrt(sum); l++) {
          if (sum % l === 0) {
            answer--;
            break;
          }
        }
      }
    }
  }
  return answer;
}

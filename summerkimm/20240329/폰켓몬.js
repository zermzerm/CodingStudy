/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/1845
 * 문제 풀이 포인트: new Set()을 이용한 중복 원소 제거 
 */
function solution(nums) {
  
  const set = new Set(nums);
  const arr = [...set];
  
  // 고를 수 있는 개수
  const count = nums.length / 2;

  // 선택할 수 있는 폰켓몬 종류 개수
  let result = arr.length > count ? count : arr.length;
  return result;
}

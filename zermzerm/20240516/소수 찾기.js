/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12921
 * 문제 이름 : 소수 찾기
 * 문제 풀이 포인트: 에라토스테네스의 체를 이용해 소수를 구한다.
 * 나의 실수: 처음엔 그냥 구했는데 런타임 오류 떠서 조사해봤더니 에라토스테네스의 체라는게 있어서 이걸 이용했다.
 */

// 에라토스테네스의 체로 구하는 방법
function solution(n) {
  let arr = new Array(n + 1).fill(true);
  arr[0] = arr[1] = false;
  let answer = [];
  for (let i = 2; i <= n; i++) {
    if (arr[i]) answer.push(i);
    for (let j = i * 2; j <= n; j += i) {
      arr[j] = false;
    }
  }
  return answer.length;
}

// 런타임 오류
// function measure(n) {
//   for (let i = 1; i <= Math.sqrt(n); i++) {
//     if (i !== 1 && n % i === 0) return false;
//   }
//   return true;
// }

// function solution(n) {
//   let answer = 0;
//   for (let i = 2; i <= n; i++) {
//     if (measure(i)) answer++;
//   }
//   return answer;
// }

console.log(solution(59));

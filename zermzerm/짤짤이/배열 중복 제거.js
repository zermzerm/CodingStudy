//https://school.programmers.co.kr/learn/courses/30/lessons/120852
//소인수분해, 중복제거
function solution(n) {
  let answer = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      answer.push(i);
      n /= i;
    }
  }
  return [...new Set(answer)];
}

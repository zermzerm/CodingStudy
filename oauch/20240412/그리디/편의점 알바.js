function solution(k) {
  let count = 0;
  const arr = [500, 100, 50, 10, 5, 1];
  for (let item of arr) {
    count += Math.floor(k / item); // 동전의 갯수
    k -= item * Math.floor(k / item); // 남은 돈 계산
  }
  return count;
}

console.log(solution(750));

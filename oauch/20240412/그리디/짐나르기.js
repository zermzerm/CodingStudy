const a = [70, 50, 80, 50];
const b = 100;

function solution(stuff, limit) {
  let count = 0; // 옮긴 횟수
  let sortedStuff = stuff.sort((a, b) => a - b); // 내림차순 정렬

  while (sortedStuff.length !== 0) {
    if (sortedStuff[0] + sortedStuff[sortedStuff.length - 1] <= limit) {
      count++;
      sortedStuff.shift();
      sortedStuff.pop();
    } else {
      count++;
      sortedStuff.pop();
    }
  }
  return count;
}

console.log(solution(a, b));

// 다시 푼 코드
function solution(n, a, b) {
  let cnt = 1;
  if (a > b) [a, b] = [b, a];
  while (true) {
    if (a % 2 === 1 && b - a === 1) break;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    cnt++;
  }
  return cnt;
}

console.log(solution(8, 4, 7));

/* 예전에 짠 코드
function solution(n, a, b) {
  var cnt = 0,
    arr = [],
    arr2 = [];
  for (i = 1; i < n + 1; i++) {
    arr.push(i);
    if (n % i == 0) {
      arr2.push(i);
    }
  }
  arr2.shift();
  arr2.pop();
  for (i = 0; i < arr.length; i++) {
    if (arr.length == 1) {
      break;
    }
    if (arr[i] == a && arr[i + 1] == b) {
      cnt++;
      return cnt;
    } else if (arr[i + 1] == a || arr[i + 1] == b) {
      arr.splice(i, 1);
    } else {
      arr.splice(i + 1, 1);
    }
    if (arr.length == arr2[arr2.length - 1]) {
      i = -1;
      arr2.pop();
      cnt++;
    }
  }

  return cnt;
}
*/

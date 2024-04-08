/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12924
 * 배운 사실 : 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수 = 주어진 수의 홀수인 약수 갯수
 */

function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  let count = 0;
  arr.forEach((val) => {
    if (val % 2 !== 0) {
      count++;
    }
  });
  return count;
}

// oauch 풀이 참고
function solution(n) {
  let count = 0;
  for(let i = 1; i <= n; i++) {
    if(n % i === 0 && i % 2 !==0) count++;
  }
  return count;
}

// 효율성 통과 못함 why!!
// function solution(n) {
//   var answer = 0;

//   for (let i = 1; i <= n; i++) {
//     let sum = i;
//     for (let j = i + 1; sum < n; j++) {
//       sum += j;
//     }
//     if (sum === n) {
//       answer++;
//     }
//   }
//   return answer;
// }

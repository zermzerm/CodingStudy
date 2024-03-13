/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12906
 * 문제 풀이 포인트: for, if
 * 나의 실수: 효율성을 생각하자... 왜 효율성이 통과 못했지, filter를 생각하자...
 */

//통과 코드
function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

//효율성 다 떨어진 코드
// function solution(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i - 1] === arr[i]) {
//       arr.splice(i - 1, 1);
//       i--;
//     }
//   }
//   return arr;
// }

//filter쓴 코드(정답)
// function solution(arr)
// {
//     return arr.filter((val,index) => val != arr[index+1]);
// }

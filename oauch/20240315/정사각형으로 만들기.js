/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181830
 * 문제 이름 : 정사각형으로 만들기
 * 문제점 : 예시 케이스만 보고 문제 풀지말자 🥹
 */

function solution(arr) {
  const rows = arr.length;
  const cols = arr[0].length;

  // 행의 수가 더 많을 때
  if (rows > cols) {
    for (let i = 0; i < rows; i++) {
      for (let j = cols; j < rows; j++) {
        arr[i].push(0);
      }
    }
  }

  // 열의 수가 더 많을 때
  if (rows < cols) {
    const emptyArr = Array(cols).fill(0);
    for (let i = rows; i < cols; i++) {
      arr.push(emptyArr);
    }
  }
  return arr;
}

// 처음 시도한 실패 케이스
// function solution(arr) {
//   const rows = arr.length;
//   const cols = arr[0].length;
//
//   if (rows > cols) {
//     for (let i = 0; i < rows; i++) {
//       arr[i].push(0);
//     }
//   }
//
//
//   if (rows < cols) {
//     const emptyArr = Array(cols).fill(0);
//     for (let i = rows; i < cols; i++) {
//       arr.push(emptyArr);
//     }
//   }
//   return arr;
// }

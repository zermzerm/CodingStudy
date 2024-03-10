/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181897
 * 문제 이름: 리스트 자르기
 * 실수
 * 1. filter에 대해서 잘못 알고 있었음
 * 2. 구조 분해 할당을 아예 까먹고 
 * const a = slicer[0];
   const b = slicer[1];
   const c = slicer[2];
 */
function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;

  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((val, index) => index % c === 0);
  }
}

// 옛 버전
// function solution(n, slicer, num_list) {
//   const [a, b, c] = slicer;
//   if (n === 1) {
//     return num_list.slice(0, b + 1);
//   } else if (n === 2) {
//     return num_list.slice(a);
//   } else if (n === 3) {
//     return num_list.slice(a, b + 1);
//   } else if (n === 4) {
//     return num_list.slice(a, b + 1).filter((_, i) => i % c === 0);
//   }
// }

/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181881
 * 문제 이름 : 조건에 맞게 수열 변환하기 2
 */

function solution(arr) {
  let index = 0;
  while (1) {
    // 조건에 맞게 배열 변환하기
    const changeArr = arr.map((val) => {
      if (val < 50 && val % 2 === 1) return (val *= 2) + 1;
      if (val >= 50 && val % 2 === 0) return (val /= 2);
      return val;
    });
    // every 함수를 사용하여 이전 배열과 현재 배열이 같은지 비교
    const sameArr = arr.every((a, i) => a === changeArr[i]);
    // 배열이 같다면 break
    if (sameArr) break;
    index += 1;
    arr = changeArr;
  }
  return index;
}

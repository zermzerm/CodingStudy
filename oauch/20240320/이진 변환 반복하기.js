/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/70129
 * 문제 이름 : 이진 변환 반복하기
 */

function solution(s) {
  // 이진 변환 카운트, 0 삭제 카운트
  let count = 0;
  let count_zero = 0;

  // s가 1이 아니면 반복
  while (s !== "1") {
    // 1. 문자열로 되어있는걸 배열로 split('')
    // 2. val === '0'인경우 count_zero 카운트
    // 3. 그렇지 않으면 val 값 return
    // 4. 다 끝나면 join으로 문자열 만듬
    const del_zeroArray = s
      .split("")
      .map((val) => {
        if (val === "0") {
          ++count_zero;
          return;
        }
        return val;
      })
      .join("");
    // 위에 반복한 값의 길이를 구해서 2진수로 변환
    s = del_zeroArray.length.toString(2);
    // 2진수 변환을 몇번 하는지 카운트
    ++count;
  }
  return [count, count_zero];
}

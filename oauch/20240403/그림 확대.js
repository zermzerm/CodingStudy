/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181836
 * 문제 이름 : 그림 확대
 */

function solution(picture, k) {
  const result = [];
  picture.map((_, index) => {
    const repeat = [];
    // 열 복사
    for (let j of picture[index]) {
      repeat.push(j.repeat(k));
    }
    // 행 복사
    for (let x = 0; x < k; x++) {
      result.push(repeat.join(""));
    }
  });
  return result;
}

/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/134240
 * 문제 이름 : 푸드 파이트 대회
 */

function solution(food) {
  const result = [];
  food.map((val, index) => {
    if (val > 1) {
      result.push(String(index).repeat(Math.floor(val / 2)));
    }
  });
  return result.join("") + "0" + result.reverse().join("");
}

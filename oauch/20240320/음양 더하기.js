/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/76501
 * 문제 이름 : 음양 더하기
 */

function solution(absolutes, signs) {
  let result = 0;
  signs.map((val, index) =>
    val === true ? (result += absolutes[index]) : (result -= absolutes[index])
  );
  return result;
}

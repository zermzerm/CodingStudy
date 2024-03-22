/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12919
 * 문제 이름 : 서울에서 김서방 찾기
 */

function solution(seoul) {
  return seoul
    .map((val, index) => (val === "Kim" ? `김서방은 ${index}에 있다` : ""))
    .join("");
}

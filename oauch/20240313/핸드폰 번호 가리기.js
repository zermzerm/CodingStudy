/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12948
 * 문제 이름 : 핸드폰 번호 가리기
 * 문제점 : 이게 맞나...? 싶다 아직 JS를 잘 활용하지 못하는 것 같아서 아쉽다
 */

function solution(phone_number) {
  const sliceNm = phone_number.slice(0, -4).split("");
  let star = "";
  sliceNm.map((_) => (star += "*"));
  return star + phone_number.slice(-4);
}

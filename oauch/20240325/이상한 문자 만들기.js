/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12930
 * 문제 이름 : 이상한 문자 만들기
 * 이렇게 푸는게 맞나 싶다.. 근데 속도나 성능은 좋다(?)
 */

function solution(s) {
  return s
    .split(" ")
    .map((val) =>
      val
        .split("")
        .map((val2, index) =>
          index % 2 === 0 ? val2.toUpperCase() : val2.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}

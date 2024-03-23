/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120894
 * 문제 이름 : 영어가 싫어요
 * 너무 복잡하게 생각해서 시간이 오래 걸렸다.
 */

const number = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(numbers) {
  for (let i = 0; i < number.length; i++) {
    numbers = numbers.split(number[i]).join(i);
  }

  return +numbers;
}

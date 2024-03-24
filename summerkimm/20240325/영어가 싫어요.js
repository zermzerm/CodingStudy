/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120894
 * 문제 풀이 포인트: replaceAll, forEach() 인덱스 활용
 */

function solution(numbers) {
  const NUMBERS = [
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
    "ten",
  ];

  NUMBERS.forEach((str, idx) => {
    numbers = numbers.replaceAll(str, idx);
  });
  return +numbers;
}

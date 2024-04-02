/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript#
 * 문제 풀이 포인트: sort method
 * 나의 실수: 0으로만 이루어진 numbers 배열이 있을 거라는 예외처리를 하지 않았다.
 * [ 풀이 과정 ]
 * 1. 각 정수를 String 요소로 변환하여 붙인 후 크고 작은지 비교해야 하기 때문에 map method를 사용합니다.
 * 2. sort method를 사용하여 큰 정수가 올 수 있도록 string으로 붙여진 두 개의 정수를 비교합니다.
 * 3. numbers 배열이 0으로 이루어져있다면 0이 여러 개 붙여진 형태로 나오기 때문에 예외처리를 해줍니다.
 */

const solution = (numbers) => {
  const sortedNumbers = numbers
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("");
  return +sortedNumbers === 0 ? "0" : sortedNumbers;
};

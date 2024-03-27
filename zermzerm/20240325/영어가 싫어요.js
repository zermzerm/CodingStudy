/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120894
 * 문제 풀이 포인트: 객체 활용
 * 나의 실수: replaceAll 활용해보기
 */

const eng = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  zero: '0',
};

const solution = (numbers) => {
  let answer = '',
    letter = '';
  for (let i = 0; i < numbers.length; i++) {
    letter += numbers[i];
    if (eng[letter]) {
      answer += eng[letter];
      letter = '';
    }
  }
  return +answer;
};

//신박한 코드
function solution(numbers) {
  const number = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  for (let i = 0; i < number.length; i++) {
    numbers = numbers.split(number[i]).join(i);
  }
  return +numbers;
}
console.log(solution('onefourzerosixseven'));

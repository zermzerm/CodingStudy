/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120838
 * 문제 풀이 포인트 : 객체 key value
 * 나의 실수 : 너무 1차원적으로 푼게 아닌가...
 */

function solution(letter) {
  var answer = '';
  var morse = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
  };
  var tmp = letter.split(' ');
  for (let i = 0; i < tmp.length; i++) {
    answer += morse[tmp[i]];
  }
  return answer;
}

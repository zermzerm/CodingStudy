/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120838
 * 문제 풀이 포인트 : 객체
 * 다른 풀이 : reduce로 해결 가능!?
 */

function solution(letter) {
  let morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  let words = letter.split(" ");
  let answer = "";
  for (let i = 0; i < words.length; i++) {
    answer += morse[words[i]];
  }
  return answer;
}

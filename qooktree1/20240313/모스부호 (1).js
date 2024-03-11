/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120838
 * 문제 풀이 포인트: 객체 사용하기
 * 나의 실수: X
 */

const MORSE_LETTERS = {
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

const solution = (letters) =>
  letters
    .split(" ")
    .map((letter) => MORSE_LETTERS[letter])
    .join("");

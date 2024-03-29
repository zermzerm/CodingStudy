/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42577
 * 문제 풀이 포인트: 접두사 기준으로 sort
 * 나의 실수: sort를 처음에는 접두사 기준이 아니라 길이 기준으로 하는 실수를 했다.
 */

const solution = (phoneBook) => {
  phoneBook.sort();
  for (let i = 0; i < phoneBook.length - 1; i++) {
    if (phoneBook[i] === phoneBook[i + 1].slice(0, phoneBook[i].length))
      return false;
  }

  return true;
};

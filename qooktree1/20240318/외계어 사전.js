/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120869
 * 문제 풀이 포인트: 2중 for문
 * 나의 실수: X
 */

/** spell의 알파벳들과 비교하여 모두 사용한 단어가 dic에 존재하는지 여부를 판별하는 함수  */
const isPossibleInDictionary = (word, spell) => {
  for (let i = 0; i < spell.length; i++) {
    if (!word.includes(spell[i])) return false;
  }
  return true;
};

const solution = (spell, dic) => {
  for (let i = 0; i < dic.length; i++) {
    if (isPossibleInDictionary(dic[i], spell)) return 1;
  }
  return 2;
};

/**
 * URL : https://school.programmers.co.kr/learn/courses/30/lessons/120869
 * 나의 실수: toString() 생각 못 함 
 */

function solution(spell, dic) {
  let answer = 0;
  let word1 = spell.sort().toString();
  for (let i = 0; i < dic.length; i++) {
    let word2 = dic[i].split("").sort().toString();
    if (word1 === word2) {
      return (answer = 1);
    } else {
      answer = 2;
    }
  }
  return answer;
}

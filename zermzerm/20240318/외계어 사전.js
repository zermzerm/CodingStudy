/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120869
 * 문제 풀이 포인트: 배열.toString()으로 해서 비교하면 배열을 벗겨내 같은 값이면 true가 나온다.
 * 나의 실수: 배열은 같은 값들이 들어있어도 ===로 비교하면 false가 나온다.
 */

//다시 푼 코드
function solution(spell, dic) {
  let 스펠종민 = spell.sort().toString();
  for (let 아이종민 = 0; 아이종민 < dic.length; 아이종민++) {
    if (스펠종민 === dic[아이종민].split('').sort().toString()) return 1;
  }
  return 2;
}

//옛날에 푼 코드
// function solution(spell, dic) {
//   var answer = 2;
//   dic.forEach((voca) => {
//     let arr = voca.split('').sort().join('');
//     if (arr == spell.sort().join('')) {
//       return (answer = 1);
//     }
//   });
//   return answer;
// }

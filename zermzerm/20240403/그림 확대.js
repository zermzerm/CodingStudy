/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181836
 * 문제 이름 : 그림 확대
 * 문제 풀이 포인트: concat = 배열에 새로운 요소나 배열을 추가하여 새로운 배열을 반환
 * 나의 실수:
 */

function solution(picture, k) {
  let answer = [];

  for (let i = 0; i < picture.length; i++) {
    let tmp = '';
    for (let j = 0; j < picture[i].length; j++) {
      tmp += picture[i][j].repeat(k);
    }
    // 문자열.concat(문자열) => 문자열 합치기
    answer = answer.concat(Array(k).fill(tmp));
  }
  return answer;
}

console.log(
  solution(
    [
      '.xx...xx.',
      'x..x.x..x',
      'x...x...x',
      '.x.....x.',
      '..x...x..',
      '...x.x...',
      '....x....',
    ],
    2
  )
);

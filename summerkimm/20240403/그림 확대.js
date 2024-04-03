/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181836
 * 다시 풀기
 */

function solution(picture, k) {
  let answer = [];

  for (let i = 0; i < picture.length; i++) {
    let temp = "";
    for (let j = 0; j < picture[i].length; j++) {
      temp += picture[i][j].repeat(k);
    }
    answer = answer.concat(Array(k).fill(temp));
  }
  return answer;
}

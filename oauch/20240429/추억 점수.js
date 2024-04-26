/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/176963
 * 문제 이름 : 추억 점수
 */

function solution(name, yearning, photo) {
  const result = [];
  for (let i = 0; i < photo.length; i++) {
    let add = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (name.includes(photo[i][j])) {
        add += yearning[name.indexOf(photo[i][j])];
      }
    }
    result.push(add);
  }
  return result;
}

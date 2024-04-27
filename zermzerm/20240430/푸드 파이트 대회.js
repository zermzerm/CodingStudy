/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/134240
 * 문제 이름 : 푸드 파이트 대회
 * 문제 풀이 포인트: 배열에 나눈 수 만큼 반복해서 집어넣고 나중에 join으로 합치기
 * 나의 실수: 문자열로만 하려다가 return에서 복잡해져서 배열로 바꿔서 다시 함
 */

//다시 푼 코드
function solution(food) {
  let result = [];
  for (let i = 1; i < food.length; i++) {
    result.push(String(i).repeat(Math.floor(food[i] / 2)));
  }
  return result.join('') + '0' + result.reverse().join('');
}

console.log(solution([1, 7, 1, 2]));

/* 예전에 푼 코드
function solution(food) {
  let arr = [];
  for (let i = 1; i < food.length; i++) {
    arr.push(Array(Math.floor(food[i] / 2) + 1).join(i));
  }
  return arr.join("") + "0" + arr.reverse("").join("");
}
*/

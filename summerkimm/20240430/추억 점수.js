/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/176963
 * 문제 풀이 과정
 * 1. photo 배열 안의 배열에 접근한다. 
 * 2. photo 배열 안의 배열 j번째 원소로 indexOf를 사용해 name 배열에 있는지 찾는다.
 * 3. 반환된 값이 -1 일 경우 0을 더하고, 아닐 경우 이 값을 활용해 yearning 배열에서 찾는다.
 * 4. sum에 더한다. 
 * 5. 새로운 배열에 sum을 넣어서 리턴한다. 
 */

function solution(name, yearning, photo) {
  let answer = [];

  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      let index = name.indexOf(photo[i][j]);
      index === -1 ? (sum += 0) : (sum += yearning[index]);
    }
    answer.push(sum);
  }
  return answer;
}

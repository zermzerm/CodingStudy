/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181858
 * 문제 이름 : 무작위로 K개의 수 뽑기
 * 문제 풀이 포인트: answer안에 하나씩 넣으면서 있는지 확인하고 없으면 넣기 있으면 통과, 개수 안맞으면 -1추가
 * 나의 실수: 반례를 생각 못했다 0,1,0,1  / k=3이면 0,1,-1나와야되는데
 */

function solution(arr, k) {
  let answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (answer.length === k) return answer;
    if (answer.indexOf(arr[i]) === -1) answer.push(arr[i]);
  }
  if (answer.length !== k) answer.push(...Array(k - answer.length).fill(-1));
  return answer;
}

console.log(solution([0, 1, 1, 2, 2, 3], 3));

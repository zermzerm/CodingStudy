/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42578
 * 문제 이름 : 의상
 * 문제 풀이 포인트: Map()
 * 나의 실수: 경우의 수 공식 계산을 까먹었었다...
 */

//Map쓴 방법 좀 더 빠름
function solution(clothes) {
  let obj = new Map();
  for (let i = 0; i < clothes.length; i++) {
    obj.has(clothes[i][1])
      ? obj.set(clothes[i][1], obj.get(clothes[i][1]) + 1)
      : obj.set(clothes[i][1], 1);
  }
  let arr = [...obj];
  return arr.reduce((acc, cur) => acc * (cur[1] + 1), 1) - 1;
}

//그냥 객체 쓴 방법 좀 더 느림
function solution(clothes) {
  let obj = {};
  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] ? (obj[clothes[i][1]] += 1) : (obj[clothes[i][1]] = 1);
  }
  return Object.values(obj).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
    ["yellow_pants", "pants"],
    ["red_pants", "pants"],
  ])
);

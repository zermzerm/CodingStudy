/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/42578
 */

// 10점 
// function solution(clothes) {
//   let map = new Map();
//   let answer = 0;
  
//   for(let i = 0; i < clothes.length; i++) {
//       map.has(clothes[i][1]) ? map.set(clothes[i][1], map.get(clothes[i][1]) + 1) : map.set(clothes[i][1], 1);
//       answer++;
//   }
//   if(map.size > 1) {
//       answer += map.size;
//   }    
//   return answer;
// }

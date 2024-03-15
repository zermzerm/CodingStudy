/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12951
 * 나의 실수 : toLowerCase()는 문자열에만 됨(당연한 소리), for문에 넣고 인덱스로 접근하려 했음 
 */


// 구글링 
function solution(s) {
  let answer;
  
  let result = s.split(" ");
  let result2 = result.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
  
  answer = result2.join(" ");
  return answer;
}

// 잘못된 접근 
// function solution(s) {
//   let a = s.toLowerCase().split(" ");
//   for(let i = 0; i < a.length; i++) {
//       let answer = a.map(x => answer[x][0].toUpperCase());

//   }
// }

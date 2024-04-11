/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/147355
 * 문제 풀이 과정 
 * 1. 반복문과 slice를 사용해 t 자르기
 * 2. 자른 t가 p보다 크면 count 1씩 증가
 * 3. 총 count 리턴
 */

function solution(t, p) {
    let count = 0;
    
    for(let i = 0; i <= t.length - p.length; i++) {
        let word = t.slice(i, i + p.length);
        if(+word <= p) count++;
    }
    return count;
}


// 첫 번째 답 
// 문자열을 변수에 넣을 필요 X (런타임 길어짐)
// 자른 문자열 배열에 넣을 필요 X

// function solution(t, p) {
//   const P = p.length; 
//   let arr = []; 
//   let count = 0;

//   for (let i = 0; i <= t.length - P; i++) {
//     let word = t.slice(i, i + P);
//     arr.push(+word); 
//   }

//   arr.forEach((val) => { 
//     val <= +p && count++;
//   });
//   return count;
// }

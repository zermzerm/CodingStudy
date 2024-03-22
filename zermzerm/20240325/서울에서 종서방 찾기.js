/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12919
 * 문제 풀이 포인트: indexOf
 * 나의 실수:
 */

//다시 푼 코드
const solution = (seoul) => {
  return `종서방은 ${seoul.indexOf('Jong')}에 있다.`;
};

console.log(solution(['Jane', 'Jong']));

//예전에 푼 코드
// function solution(seoul) {
//     for(i=0;i<seoul.length;i++){
//         if(seoul[i]==='Kim'){
//             return `김서방은 ${i}에 있다`;
//         }
//     }
// }

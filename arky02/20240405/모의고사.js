//https://school.programmers.co.kr/learn/courses/30/lessons/42840
// 1. 각 수포자가 문제 찍는 로직(?)을 배열로 담았다.
// 2. 문제가 담긴 배열 answers를 돌면서 각 수포자들의 문제 찍는 로직에 해당하는 숫자와 일치하는지 비교했다. 이 때 로직 배열 index 넘어가도 배열 index로 나머지 구해서 다시 처음부터 비교할 수 있도록 했다.

function solution(answers) {
    let answer = [0,0,0];
    const p1 = [1,2,3,4,5], p2=[2,1,2,3,2,4,2,5], p3=[3,3,1,1,2,2,4,4,5,5];
    
    answers.map((ans,idx)=> {
       if(ans === p1[idx%5]) ++answer[0];        
       if(ans === p2[idx%8]) ++answer[1];
       if(ans === p3[idx%10]) ++answer[2];
    })
    return answer.map((el, idx)=> el === Math.max(...answer) ? idx+1 : 0 ).filter((el)=> el!==0);
}

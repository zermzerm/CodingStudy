// https://school.programmers.co.kr/learn/courses/30/lessons/12909
// 대학교 때 스택 큐 관련 문제 푼게 기억이 나서 쉬웠다.

function solution(s){
    let count = 0;
    
    for(let i = 0; i< s.length; i++){
        if(count<0) return false;
        if (s[i] === "(") ++count;
        else --count;
    }
    
    return (count === 0) ? true : false;
}

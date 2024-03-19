// https://school.programmers.co.kr/learn/courses/30/lessons/12941
// 아직 sort, reduce 함수를 잘 사용을 못하는 것 같다. 나머진 괜찮았다.

function solution(a,b){
    a.sort((i,j)=> i-j);
    b.sort((i,j)=> j-i);
    
    return a.map((num, idx)=> num*b[idx]).reduce((a,b)=> a+b)
}

// https://school.programmers.co.kr/learn/courses/30/lessons/70129
// toString(2)으로 이진수 변환하는 방법을 몰랐다. 이진수로 변환하는 방법에 대해 생각하다가 포기하고 찾아봤는데 그래서 시간이 좀 걸렸다. 그리고 split하면 문자열로 되는거 잊지 않기!

function solution(s) {
    let answer = [], zeroSum = 0, iterateCount = 0;
    
    while(s !== '1'){
        s = s.split('').filter((x)=> { if(x === '0') zeroSum++; return x !== '0' }).length.toString(2);
        iterateCount++;
    }
    
    return [iterateCount, zeroSum];
}

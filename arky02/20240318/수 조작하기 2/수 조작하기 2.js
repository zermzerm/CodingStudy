//https://school.programmers.co.kr/learn/courses/30/lessons/181925
// 쉬웠다. 보다 코드를 짧게 쓸 수 있을 것 같다.

function solution(numLog) {
    let answer = '';
    numLog.map((_, idx)=> {
        switch(numLog[idx+1] - numLog[idx]){
            case 1: 
                answer += "w";
                break;
            case -1: 
                answer += "s";
                break;
            case 10:
                answer += "d";
                break;
            case -10:
                answer += "a";
                break;
        }
    })
    return answer;
}

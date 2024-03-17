// https://school.programmers.co.kr/learn/courses/30/lessons/120897
// 시간 복잡도를 절반으로 줄여 답을 구하는 보다 효율적인 방법으로 풀 수 있을 것 같다. (근데 귀찮다)

function solution(n) {
    let answer = [];
    for(let i = 1; i<=n; i++){
        if(n%i === 0){
            answer.push(i);
        }
    }
    return answer;
}

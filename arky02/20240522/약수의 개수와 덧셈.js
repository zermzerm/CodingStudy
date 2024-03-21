// https://school.programmers.co.kr/learn/courses/30/lessons/77884
// 쉽긴 했는데 좀더 for문 안쓰고 간결하게 풀고싶다...

function solution(left, right) {
    let answer = 0;
    for(let i = left; i<=right; i++){
        let count = 0;
        for(let j = 1; j<=i; j++) if(i%j === 0) count ++;
        count%2 ? answer -= i: answer += i;
    }
    return answer;
}

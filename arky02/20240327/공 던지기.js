// https://school.programmers.co.kr/learn/courses/30/lessons/120843#

function solution(numbers, k) {
    let answer = 0;
    for(let i = 0; i< k-1; i++){
        answer = (answer+2)%numbers.length
    }
    return answer+1;
}

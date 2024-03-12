/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120848
 * 문제 이름 : 팩토리얼
 * 수식만 잘 세우면 쉽다
 */

function solution(n) {
    let answer = 1;
    let i = 1;
    for(; i<= 10; i++){
        if(answer*i <= n && n < answer*i*(i+1)) break;
        answer *= i;
    }
    return i;
}

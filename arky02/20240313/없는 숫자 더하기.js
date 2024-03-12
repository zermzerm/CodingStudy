/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/86051
 * 문제 이름 : 없는 숫자 더하기
 * 문제가 너무 별거 없다
 */

function solution(numbers) {
    var answer = 0;
    for(let i = 0; i<10; i++){
        if(!numbers.includes(i))answer += i;
    }
    return answer;
}

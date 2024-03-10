/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181897
 * 문제 이름: 문자열 묶기
 * 나의 실수: 실수는 없지만 이렇게 푸는거 좀 야매같다...? 솔직히 Array.fill(0)으로 0으로 초기화 시키는거 구글링 함.
 */

function solution(strArr) {
    var answer = 0;
    let ans = new Array(31).fill(0);
    for(const str of strArr){
        ans[str.length]++;
    }
    for(const temp of ans){
        if(temp > answer) answer = temp;
    }
    return answer;
}

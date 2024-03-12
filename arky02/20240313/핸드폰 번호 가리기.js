/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12948
 * 문제 이름 : 핸드폰 번호 가리기
 * slice 사용에 익숙치 않다.
 */

function solution(phone_number) {
    let answer = '';
    for(let i = 0; i< phone_number.length-4; i++){
        answer += '*';
    }
    answer += phone_number.slice(-4);
    return answer;
}

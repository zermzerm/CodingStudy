/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12951#
 * 문제 풀이 포인트: 알파벳 여부 구별, 공백 문자 연속일 경우 구별, 대소문자 치환 방법
 * 나의 실수: 솔직히 알파벳 어떻게 구별하는지, 대소문자 치환 어케하는지 찾아봤다. 그리고 공백 숫자 연속일 경우를 생각을 못해서 런타임 에러가 났었다.
 */

function solution(s) {
    let answer = '';
    const strArr = s.split(" ");
  
    for(let i = 0; i< strArr.length; i++){
        const letterArr = strArr[i].split('');
        
        if(letterArr === []) {answer += " "; continue;}
        
        const resultArr = letterArr.map((letter)=> letter.toLowerCase())
        if(isNaN(letterArr[0])) resultArr[0] = letterArr[0]?.toUpperCase();
        
        answer += resultArr.join('') + (i === strArr.length-1 ? "" : " ");
    }
    return answer;
}

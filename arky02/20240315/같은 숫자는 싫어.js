/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12906
 * 문제 이름 : 같은 숫자는 싫어
 * 문제점 : 솔직히 쉬웠다. 구글링 안하고 풀음
 */

function solution(arr)
{
    let answer = [];

    for(num of arr){
        if (answer.length === 0 || answer[answer.length-1] !== num) answer.push(num);
    }
    
    return answer;
}

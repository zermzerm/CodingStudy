/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181897
 * 문제 이름: 수열과 구간 쿼리
 * 나의 실수: 실수는 없었는데 문제 이해하는데 좀 걸렸다. 이해 하고 나서는 쉬웠음!! 굿
 */

function solution(arr, queries) {
    for(let query of queries){
        for(let temp = query[0]; temp<=query[1]; temp++){
            if(temp%query[2] === 0) ++arr[temp];
        }
    }
    return arr;
}

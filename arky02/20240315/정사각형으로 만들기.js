/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12906
 * 문제 이름 : 정사각형으로 만들기
 * 문제점 : 처음에 이중 for문으로 일단 전체 배열 값 다 돌면서, if로 조건 비교하면서 요소 추가하려했다가 빠른 손절치고 먼저 행과 열의 값 중에 어떤게 큰지 찾고 이걸로 분기를 나눈게 다행인 것 같다.
 */

function solution(arr) {
    let answer = arr;
    
    const colCount = arr.length;
    const rowCount = arr[0].length;
    
    if(colCount>rowCount){
        for(let j = 0; j< colCount; j++){
           for(let i = 0; i< colCount-rowCount; i++){
                answer[j].push(0);
            } 
        }
    }else{
        const blankArr = new Array(rowCount).fill(0)
        for(let i = 0; i< rowCount-colCount; i++){
            answer.push(blankArr)
        }
    }
    return answer;
}

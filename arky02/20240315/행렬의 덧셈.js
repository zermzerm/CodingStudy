/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12950
 * 문제 이름 : 행렬의 덧셈
 * 문제점 : 처음 배열을 초기화 하고 값을 대입해야하는데 이걸 또 까먹어서 그냥 대입했다가 에러나서 솔직히 구글링 했다. new Array()해서 꼭 배열 초기화 하고 값 대입하는 거 잊지 말기! 나머지는 괜찮았다.
 */

function solution(arr1, arr2) {
    let answer = new Array(arr1.length);
    
    for(let i =0; i< arr1.length; i++){
        answer[i] = new Array(arr1[0].length);
        for(let j = 0; j< arr1[0].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j] 
        }
    }
    return answer;
}

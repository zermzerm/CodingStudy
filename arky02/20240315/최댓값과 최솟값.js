/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12939
 * 문제 이름 : 최댓값과 최솟값
 * 문제점 : 처음에 strArr룰 내가 숫자 배열을 split 해서 string 배열을 만들어 놓고 이거를 모르고 string이랑 숫자랑 비교연산을 해서 음수일 때 자꾸 절댓값으로 비교를 하는 에러가 있었는데 이거때문에 한참 헤맸다. split하면 문자 배열이 되는거 명심!! string이랑 숫자 비교연산 하지 않게 조심!
 */

function solution(s) {
    const strArr = s.split(" ");
    let min = strArr[0], max = strArr[0];
    for(let i = 1; i<strArr.length; i++){
        if(Number(strArr[i])<=min) min = (strArr[i]);
        if(Number(strArr[i])>=max) max = (strArr[i]);
    }
    return min + " " + max;
}

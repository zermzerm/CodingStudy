//https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    list = n.toString(3).split('');
    return parseInt(list.map((_,idx)=> list[list.length-idx-1]).join(''),3);
}

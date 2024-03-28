// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    let total = 0;
    Array(count).fill(0).map((_,idx)=> {total += price*(idx+1)});
    return total < money ? 0 : total - money;
}

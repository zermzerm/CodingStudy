// https://school.programmers.co.kr/learn/courses/30/lessons/86491
// 1. 가로 세로 둘 중 큰게 index 0번, 작은게 index 1번으로 가도록 sort했다.
// 2. 이후 가로 세로 중 큰 길이만 모아둔 index 0번 배열들 중 가장 큰 값을 구하고, 작은 길이만 모아둔 index 1번 배열 중 가장 큰 값을 구했다.
// 3. 이 두개의 길이를 구하면 최소 세로*가로 길이 구할 수 있다.

function solution(sizes) {
    sizes.map((size)=> size.sort((a,b)=> a-b))
    let max1 = 1, max2 = 1;
    sizes.map((size)=> {
        if(size[0]>max1) max1 = size[0]
        if(size[1]>max2) max2 = size[1]
    })
    return max1*max2;
}

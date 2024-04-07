// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
    const res = dots.sort((a,b)=> (a[0]-b[0])+(a[1]-b[1]))
    return (res[0][0]-res[3][0])*(res[0][1]-res[3][1])
}

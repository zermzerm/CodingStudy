// https://school.programmers.co.kr/learn/courses/30/lessons/12940#
// 처음에 m%i === 0 (최대공약수)만 필터링해서 최소공배수를 필터링 못해서 배열에 잘못된 값이 담겨서 틀렸다가 최소공배수까지 되는지 필터링해줘서 성공했다. 짧게 쓰려고 노력함.

function solution(n, m) {
    for(let i = n<m ? n: m ; i>= 1; i--){
        if(m%i === 0 && ((n*m)/i)%m === 0) return [i,(n*m)/i]; 
    }
}

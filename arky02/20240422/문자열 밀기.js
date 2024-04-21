function solution(A, B) {
    let temp = [];
    A=A.split('')
    for(let a = 0; a<A.length; a++){
        if([...temp,...A].join('') === B) return temp.length
        temp.push(A.pop())
    }
    return -1;
}

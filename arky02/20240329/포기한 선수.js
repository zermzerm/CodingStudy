// 아래는 해시로 해보려다가 포기. 위에는 성공은 하는데 효율성 테스트 실패(시간초과)로 포기!
// https://school.programmers.co.kr/learn/courses/30/lessons/42576

const solution = (participant, completion) => participant.sort().map((el,idx)=> (completion.sort()[idx] !== el) ? el : '').filter((el)=>el)[0]

//function solution(participant, completion) {
//    const map = new Map();
//    participant.map((p)=> {completion.includes(p)? map.set(1,p) : map.set(0,p)})
//    return map.get(0)
//}

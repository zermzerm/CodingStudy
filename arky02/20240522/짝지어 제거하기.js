// https://school.programmers.co.kr/learn/courses/30/lessons/12973
// 코드 실행했는데 통과하거나 시간 초과되거나 해서 결국 못풀었다. 이중 for문이 문제인 듯 하다 난 몰라 모르겠어 졸려
// 다음에 다시 풀어볼게요 (언젠가)

function solution(s)
{
    let list = []
    list.push(s.split(''))
    for(let j = 0; j<s.length/2; j++){
      for(let i = 0; i<s.length-1; i++){
        let res;
        if(list[list.length-1][i] === list[list.length-1][i+1]){
             res = list[list.length-1].filter((_, idx)=> idx !== i && idx !== i+1); 
             list.push(res)      
             break;  
        } 
      }
    }
    
    if(list[list.length-1].length === 0) return 1;
    else return 0;
}

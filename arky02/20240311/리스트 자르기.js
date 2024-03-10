/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181897
 * 문제 이름: 리스트 자르기
 * 나의 실수: 마지막 case 4에서 slice 한 배열을 다시 filter 돌리는 걸 생각 못했다. 구글링 함 ㅎㅎ filter 기능에 익숙해져야겠다!!!
 */

function solution(n, slicer, num_list) {
    const [a,b,c] = [slicer[0],slicer[1],slicer[2]];
    switch(n){
        case 1: return num_list.slice(0, b+1);
        case 2: return num_list.slice(a);
        case 3: return num_list.slice(a, b+1);
        case 4: return num_list.slice(a, b+1).filter((_,index)=> index%c===0);
        
    }
}


/*
이건 왜 않됨?;;; 테스트 19만 틀렸다고 나옴;;ㅠ.ㅠ 물론 코드는 구리지만 ㅎㅎ
function solution(n, slicer, num_list) {
    var answer = [];
    const [a,b,c] = [slicer[0],slicer[1],slicer[2]];
    if(n === 4){
        const ans = num_list.filter((num, index)=> 
            index>=a && index<=b && (num-num_list[a])%c === 0
        )
        answer = ans;
    }
    switch(n){
        case 1: return num_list.slice(0,b+1);
        case 2: return num_list.slice(a);
        case 3: return num_list.slice(a, b+1);
        
    }
    return answer;
}
*/

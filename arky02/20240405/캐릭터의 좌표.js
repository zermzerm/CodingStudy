// https://school.programmers.co.kr/learn/courses/30/lessons/120861#
// switch case로 나누어서 각각 케이스에 맞게 answer값을 더하고 뺴도록 했다. 이 때 board 크기 넘어가면 연산 안하도록 if문 조건을 걸었다.

function solution(keyinput, board) {
    var answer = [0,0];
    keyinput.map((key)=> {
        switch(key){
            case 'left':
                if(answer[0] > (board[0]-1)/2*-1) answer[0] -= 1;
                break;
            case 'right':
                if(answer[0] < (board[0]-1)/2) answer[0] += 1;
                break;
            case 'up':
                if(answer[1] < (board[1]-1)/2) answer[1] += 1;
                break;
            case 'down':
                if(answer[1] > (board[1]-1)/2*-1) answer[1] -= 1;
                break;
        }
    })
    
    return answer;
}

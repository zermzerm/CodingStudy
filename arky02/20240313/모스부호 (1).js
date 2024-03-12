/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120838
 * 문제 이름 : 모스부호 (1)
 * 음 쉬웠다
 */

function solution(letter) {
    var answer = '';
    const morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
    const letterArr = letter.split(" ");
    for(let singleMorse of letterArr){
        answer += morse[singleMorse]
    }
    return answer;
}

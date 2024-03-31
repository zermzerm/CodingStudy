// https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book) {
    for(let i = 0; i< phone_book.length; i++){
        for(let j=0; j<phone_book.length; j++){
            if(j === i) continue;
            if(phone_book[j].startsWith(phone_book[i])) return false;
        }
    }
    return true;
}

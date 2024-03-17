// https://school.programmers.co.kr/learn/courses/30/lessons/120869
// 은근 생각할게 많아서 살짝 복잡했지만 나쁘지 않았다. 그리고 알게 된 사실! map을 사용할 때 중간에 return이 안된다! break도! continue도! (어쩌면 당연한 걸수도....^^)

function solution(spell, dic) {
    let spellCount = Array(spell.length);
    
    for(word of dic){
        spellCount.fill(0);
        for(let i = 0; i< word.length; i++){
            spell.map((spellChar, idx) => { spellChar === word[i] && spellCount[idx]++; })
        }
        if(spellCount.filter((count)=>count === 1).length == spell.length) return 1;
    }
    
    return 2;
}

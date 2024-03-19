// https://school.programmers.co.kr/learn/courses/30/lessons/120840#
/// toFixed(0)하면 소숫점 0번째 자리까지 반올림해줘서 출력해주는걸 몰라서 구글링했다. 처음엔 조합인 줄 알아서 틀렸다. 문제 잘 읽고 수학 공식만 알면 쉬울 것 같다.

function solution(balls, share) {
    const divider = share > (balls - share) ? share: balls-share;
    let a = 1, b = 1;
    for(let i = 0; i< divider; i++){
        a *= balls-i;
        b *= i+1;
    }
    return (a/b).toFixed(0)*1;
}

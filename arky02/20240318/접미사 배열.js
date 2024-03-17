// https://school.programmers.co.kr/learn/courses/30/lessons/181909
// 솔직히 sort() 함수 몰라서 구글링 했다. 되게 유용한 함수인 것 같다. 오름차순 정렬 많이나올 것 같으니 암기하도록! 아직도 slice 사용에 익숙치 않은 것 같다...분발 필요ㅠ

function solution(my_string) {
    const strDic = [];
    for(let i = 1; i<= my_string.length; i++) strDic.push(my_string.slice(i*-1));

    return strDic.sort();
}

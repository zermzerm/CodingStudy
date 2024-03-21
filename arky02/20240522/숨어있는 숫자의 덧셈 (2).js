// https://school.programmers.co.kr/learn/courses/30/lessons/120864
// replace 함수를 잘 몰랐다. 영어 정규식은 구글링 했다. 정규식 한번 공부 해야겠다. reduce 함수는 안찾아보고 써서 풀어서 맞긴 했는데 찝찝해서 다시 잘 쓴게 맞는지 찾아봤다. 얼른 익숙해 질 것!!!

const solution = (str) => str.replace(/[a-z|A-Z]/gi, ',').split(',').reduce((acc,curr)=>acc+Number(curr) ,0)

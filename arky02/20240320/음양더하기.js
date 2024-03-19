// https://school.programmers.co.kr/learn/courses/30/lessons/76501
// reduce 함수를 솔직히 몰랐어서 여러줄로 풀었다가 뭔가 한 줄로 줄일 수 있을 것 같아서 방법을 찾아봤다.

const solution = (abs, signs) => abs.map((num,idx)=> num*(signs[idx] ? 1: -1)).reduce((a,b)=>a+b);

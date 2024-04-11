//정수 내림차순으로 배치하기
//[...String(n)]이란 걸 배웠다. 대윤혁
//12414215 -> [  '1', '2', '4',  '1', '4', '2',  '1', '5'] 이렇게 바꿔준다!

function solution(n) {
  return +[...String(n)].sort((a, b) => b - a).join("");
}

console.log(solution(12414215));

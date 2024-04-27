/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/176963
 * 문제 이름 : 추억 점수
 * 문제 풀이 포인트: 2중 for문 includes로 일치하는게 있으면 indexOf로 동일한 index의 점수 추가
 * 나의 실수:
 */

//다시 푼 코드
function solution(name, yearning, photo) {
  const result = [];
  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (name.includes(photo[i][j])) {
        sum += yearning[name.indexOf(photo[i][j])];
      }
    }
    result.push(sum);
  }
  return result;
}

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ]
  )
);

/* 예전에 푼 코드
function solution(name, yearning, photo){
    var answer=[];
    for(i=0;i<photo.length;i++){
        var point=0;
        for(j=0;j<name.length;j++){
            var arr=photo[i];
            point+=arr.filter(v=>name[j]===v).length*yearning[j];
        }
        answer.push(point);
    }
    return answer;
}
*/

/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/135808
 * 문제 이름 : 과일 장수
 * 문제 풀이 포인트: 내림차순으로 정렬후 배열에 추가하면서 m개가 되면 최저 값*m 해준후 최종 sum에 더하고 배열 다시 초기화하고 추가하는 식
 * 나의 실수:
 */

// 다시 푼 코드
function solution(k, m, score) {
  const sortArr = score.sort((a, b) => b - a);
  let sum = 0;
  let tmpArr = [];
  for (let i = 0; i < sortArr.length; i++) {
    if (tmpArr.length < m) tmpArr.push(sortArr[i]);
    if (tmpArr.length === m) {
      sum += Math.min(...tmpArr) * m;
      tmpArr = [];
    }
  }
  return sum;
}

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));

/* 예전에 푼 코드
function solution(k,m,score){
    var answer=0;
    var arr = score.sort();
    if(score.length%m!==-0){
        for(i=0;i<score.length%m;i++){
            arr.splice(i,1);
            i--;
        }
    }
    for(i=0;i<score.length;i++){
        answer+=arr[i]*m;
        i=i+m-1;
    }
    return answer;
}
*/

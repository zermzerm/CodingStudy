/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/142086
 * 문제 이름 : 가장 가까운 같은 글자
 * 문제 풀이 포인트: s의 문자를 하나씩 담는 arr와 그 index를 표현하는 answer 배열을 만들고 없는거면 -1 answer에 넣고 있는거면 arr의 뒤에서 부터 조사해서 몇번째에 나오는지 answer에 넣기
 * 나의 실수:
 */

// 다시 푼 코드
function solution(s) {
  const arr = [];
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    if (arr.indexOf(s[i]) === -1) {
      arr.push(s[i]);
      answer.push(-1);
    } else {
      let idx = 1;
      for (let j = answer.length - 1; j >= 0; j--) {
        if (s[i] === arr[j]) {
          answer.push(idx);
          arr.push(s[i]);
          break;
        } else idx++;
      }
    }
  }
  return answer;
}
console.log(solution('foobar'));

/* 예전에 푼 코드
function solution(s){
    var answer=[],arr=[],end=[];
    answer=s.split("");
    for(i=0;i<answer.length;i++){
        if(arr.filter(v=>answer[i]===v).length>0){
            var cnt=[];
            arr.push(answer[i]);
            for(j=0;j<arr.length;j++){
                if(arr[j]===answer[i]){
                    cnt.push(j);
                }
            }
            cnt.sort((a,b)=>b-a);
            end.push(cnt[0]-cnt[1]);
            
        }
        else{
            arr.push(answer[i]);
            end.push(-1);
        }
    }
    return end;
}
*/

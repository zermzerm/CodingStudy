/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120880
 * 문제 이름 : 둘만의 암호
 * 문제 풀이 포인트: skip 문자열을 다 아스키 코드로 바꿔서 s의 문자들을 for문 돌려서 하나씩 아스키 코드로 바꾸고 index만큼 추가하는 for문 돌리면서 skip의 문자열의 아스키 코드랑 일치하는게 있으면 건너뛰는 식
 * 나의 실수:
 */

// 다시 푼 코드
function solution(s, skip, index) {
  let answer = '';
  let asciiSkip = skip.split('').map((el) => el.charCodeAt());
  for (let i = 0; i < s.length; i++) {
    let tranS = s[i].charCodeAt();
    for (let j = 0; j < index; j++) {
      tranS++;
      if (tranS > 122) tranS -= 26;
      if (asciiSkip.indexOf(tranS) !== -1) j--;
    }
    answer += String.fromCharCode(tranS);
  }
  return answer;
}

console.log(solution('z', 'abcdefghij', 20));

/* 예전에 푼 코드 통과 실패
function solution(s, skip, index) {
    var skip_arr=[],s_arr=[],ans_arr=[];
    for(i in skip){
        skip_arr.push(skip.charCodeAt(i));
    }
    skip_arr.sort((a,b)=>a-b);
    for(i in s){
        if(s.charCodeAt(i)>122){
            s_arr.push(s.charCodeAt(i)-26);
        }
        else{
            s_arr.push(s.charCodeAt(i));
        }
    }
    for(i=0;i<s_arr.length;i++) {
        var cnt=0;
        for(j=0;j<skip_arr.length;j++){
            if(s_arr[i]<=skip_arr[j]&&skip_arr[j]<=s_arr[i]+index){
                cnt+=1;
            }
        }
        if(s_arr[i]+cnt+index>122){
            s_arr.splice(i,1,s_arr[i]+cnt+index-26);
        }
        else{
            s_arr.splice(i,1,s_arr[i]+cnt+index);
        }
        
    }
    for(i=0;i<s_arr.length;i++){
        for(j=0;j<skip_arr.length;j++){
            if(s_arr[i]===skip_arr[j]){
                s_arr.splice(i,1,s_arr[i]+1);
                i--;
                break;
            }
        }
    }
    if(s_arr[i]>122){
        s_arr.splice(i,1,s_arr[i]-26);
    }
    for(i=0;i<s_arr.length;i++){
        ans_arr.push(String.fromCharCode(s_arr[i]));  
    }
    return ans_arr.join("")
}
*/

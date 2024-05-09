/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120863
 * 문제 이름 : 다항식 더하기
 * 문제 풀이 포인트:
 * 나의 실수:
 */

// 다시 푼 코드
function calc(prev, num) {
  if (prev === "+") return +num;
  else if (prev === "-") return -num;
  else return +num;
}

function solution(polynomial) {
  const arr = polynomial.split(" ");
  let xValue = 0,
    numValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("x")) {
      let num = arr[i].replace(/[^0-9]/g, "");
      if (num === 0) num = 1;
      if (arr[i] === "-x") num = -1;
      xValue += calc(arr[i - 1], num);
    } else if (Number.isInteger(+arr[i])) {
      let num = +arr[i];
      numValue += calc(arr[i - 1], num);
    }
  }
  console.log(xValue);
  if (xValue === 1) xValue = "";
  if (xValue === -1) xValue = "- ";
  if (xValue === 0) return `${numValue}`;
  if (numValue === 0) return `${xValue}x`;
  return `${xValue}x ${
    numValue < 0 ? "- " + Math.abs(numValue) : "+ " + numValue
  }`;
}

console.log(solution("- 3x - 1"));

/* 예전에 푼 코드
function solution(polynomial) {
    let exp = polynomial.split(" "),xArr=[],NumArr=[],xNum=0,num=0;
    exp.forEach((el)=>{
        if(el.match('x')){
            console.log(el.slice(el.length-1,1));
            el.length===1?xNum+=1:xNum+=Number(el.replace('x',''));
        }
        else if(el!=='+'){
            num+=Number(el);
        }
    });
    if(xNum==1){
        xNum='';
    }
    if(xNum===0){
        return `${num}`;
    }
    else if(num===0){
        return `${xNum}x`
    }
    else{
       return `${xNum}x + ${num}`
    }
}
*/

// https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

const solution = (array, commands)  => commands.map((el)=> array.slice(el[0]-1,el[1]).sort((a,b)=> a-b)[el[2]-1])
    

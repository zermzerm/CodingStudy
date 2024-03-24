"""
URL: https://www.acmicpc.net/problem/1431
문제 풀이 포인트: lambda
나의 실수: X
"""

N = int(input());

def sum_num(inputs):
    result = 0
    for i in inputs:
        if i.isdigit():
            result+=int(i)
    return result

arr = [input() for _ in range(N)]
arr.sort(key = lambda x:(len(x), sum_num(x), x))
for i in arr:
  print(i)
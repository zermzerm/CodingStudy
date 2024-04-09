const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

function BFS(graph, start) {
  const visited = []; // 탐색을 마친 노드
  let needVisit = []; // 탐색해야할 노드

  needVisit.push(start); // 노드 탐색 시작

  // 탐색해야할 노드가 남아있다면
  while (needVisit.length !== 0) {
    const node = needVisit.shift(); // 가장 앞에 있는 정점을 뺀다.
    if (!visited.includes(node)) {
      // 해당 노드 방문이 처음이라면
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
      console.log(needVisit);
    }
  }
  return visited;
}

console.log(BFS(graph, "C"));

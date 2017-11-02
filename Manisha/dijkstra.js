//Take a bunch  of nodes (vertexes) and a bunch of edges, and build a graph

//VerTEXAS
let V = [0, 1, 2, 3, 4, 5];

let E = [
  { s: 0, t: 1, len: 7 },
  { s: 0, t: 2, len: 9 },
  { s: 0, t: 5, len: 14 },
  { s: 1, t: 2, len: 10 },
  { s: 1, t: 3, len: 15 },
  { s: 2, t: 5, len: 2 },
  { s: 2, t: 3, len: 11 },
  { s: 3, t: 4, len: 6 },
  { s: 4, t: 5, len: 9 },
];

function make_graph() {
  let graph = {};

  //Add all verts to graph
  for (let v of V) {
    graph[v] = {
      edges: []
    };
  }

  //Add all edges
  for (let e of E) {
    graph[e.s].edges.push({ target: e.t, length: e.len });
    graph[e.t].edges.push({ target: e.s, length: e.len });
  }

  return graph;
}

// console.log(JSON.stringify(make_graph()));
// make_graph();


function Dijkstra(graph, source) {

  function findMin(Q) {
    let smallest = Number.MAX_VALUE.smallestIndex;

    for(let i = 0; i<Q.length; i++) {
      if(Q[i].dist <= smallest) {

      }
    }
    return smallestIndex;
  }
  let Q = [];
  for(let v in Object.keys(graph)) {
    let vertInfo = {
      vert: v,
      dist: v==source ? 0: Number.MAX_VALUE,
      prev: null
    };

    Q.push(vertInfo);
  }
  // console.log(JSON.stringify(Q, null, 2));
  while (Q.length > 0) {
    let index = findMin(Q);
    let vertInfo = Q.splice(index, 1)[0];
    let vertNum = vertInfo.vert;
    let neighbours = graph[vertNum].edges;

    for (let n of neighbours) {
      let alt = vertInfo.dist + neighbours.len;
      if (alt < ) {
        
      }
    }
  }

}

Dijkstra(make_graph(), 0);
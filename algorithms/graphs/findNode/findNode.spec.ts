import {findNode, findNode2, findNodeStack} from './findNode'

class graphNode {
    name: string
    children: graphNode[]

    constructor(name: string) {
        this.name = name;
        this.children = [];
      }
    
      addChild(name: string) {
        this.children.push(new graphNode(name));
        return this;
      }
}


fit('returns F node found in graph', () => {

    const graph = new graphNode('A')

    graph.addChild('B').addChild('C')
    graph.children[0].addChild("E").addChild("F");

    const tree = JSON.stringify(graph, null, 2)
    console.log('graph===', tree)

    const response = {
        "name": "A",
        "children": [
          {
            "name": "B",
            "children": [
              {
                "name": "E",
                "children": []
              },
              {
                "name": "F",
                "children": []
              }
            ]
          },
          {
            "name": "C",
            "children": []
          }
        ]
      }

      expect(findNodeStack(graph, 'F')).toEqual('F')
    // expect(findNode2(graph, 'F')).toEqual('F')
})





